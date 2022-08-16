import sql from "mssql";

import config from "../config";

const { DB_USER, DB_PWD, DB_NAME, SERVER } = config;

const dbSettings = {
  user: DB_USER || "",
  password: DB_PWD || "",
  database: DB_NAME || "",
  server: SERVER || "",
  options: {
    encrypt: false, // for azure
    trustServerCertificate: false, // change to true for local dev / self-signed certs
  },
  timezone: 'utc'
};

export const getDPCConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    // const result = await pool.request().query("SELECT 1");
    // console.log(result);
    return pool;
  } catch (err) {
    console.log(err);
  }
};
