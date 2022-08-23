import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "DPC_Preprod", // db name,
  "calvarez", // username
  "awsPBKDF2!", // password
  {
      host: '10.40.2.110',
    dialect: "mssql",
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    // logging: false,
  }
);
