const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
import config from "../config";

import { Users } from "../models/Users";

const signToken = ({ id, saltToken }) => {
  return jwt.sign({ id }, saltToken, {
    expiresIn: 60 * 60 * 24 * 365,
  });
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "user or password invalid" });
  }

  let dbuser;

  try {
    dbuser = await Users.findOne({
      where: {
        UserName: username,
      },
    });

    if (dbuser == null) {
      return res.status(400).json({ message: "cannot find user" });
    }
  } catch (error) {
    return res.status(500).json({
      returnmessage: error.message,
    });
  }

  try {
    console.log("About to compare the password");
    const result = await bcrypt.compare(password, dbuser.Password);
    console.log("Result ", result);
    if (result) {
      console.log("Sccond Result: ", result);
      const token = jwt.sign({ id: dbuser.ID }, config.SECRET_KEY);
      return res.send({ token: token.toString() });
    }
    return res.send({ message: "user or password invalid" });
  } catch (error) {
    return res.status(500).json();
  }
};

export const register = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "user or password invalid" });
  }

  let dbuser;

  try {
    dbuser = await Users.findOne({
      where: {
        UserName: username,
      },
    });

    if (dbuser) {
      return res.status(400).send({ message: "user already exists" });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    let newUser = await Users.create({
      UserName: username,
      Password: hashedPassword,
    });
    return res.status(201).json({ user: newUser });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

//no permitir logearce a la vez con el mismo usuario
//timer token