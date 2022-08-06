import { getConnection, queries } from "../database";
import sql from "mssql";

export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllProducts);
    res.json(result.recordset);
  } catch (error) {
    // 500 Error interno del servidor
    res.status(500);
    res.send(error.message);
  }
};

export const postProducts = async (req, res) => {
  const { name, description } = req.body;
  let { quantity } = req.body;

  if (name == null || description == null) {
    return res
      .status(400)
      .json({ message: "Bad Request. Please Fill All Fields." });
  }

  if (quantity == null) quantity = 0;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.VarChar, description)
      .input("quantity", sql.Int, quantity)
      .query(queries.postNewProduct);
    res.send({ name, description, quantity });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT COUNT(*) FROM Products");
    // res.status(204); //Eliminado correctamente o request exitosa
    // res.sendStatus(204); //Eliminado correctamente o request exitosa
    // console.log(result)
    res.send(result.recordset[0][""]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id", sql.Int, id)
      .query(queries.getProductById);
    res.send(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id", sql.Int, id)
      .query(queries.deleteProductById);
    res.status(204); //Eliminado correctamente o request exitosa
    // res.sendStatus(204); //Eliminado correctamente o request exitosa
    res.send(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const putProductsById = async (req, res) => {
  const { name, description, quantity } = req.body;
  const { id } = req.params;

  if ((name == null || description == null, quantity === null)) {
    return res
      .status(400)
      .json({ message: "Bad Request. Please Fill All Fields." });
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.VarChar, description)
      .input("quantity", sql.Int, quantity)
      .input("id", sql.Int, id)
      .query(queries.putProductsById);
    res.json({ name, description, quantity });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
