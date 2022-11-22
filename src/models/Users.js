import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export const Users = sequelize.define(
  "Users",
  {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    UserName: {
      type: DataTypes.STRING,
    },
    Password: {
      type: DataTypes.TEXT,
    },
    LastUserID: {
      type: DataTypes.STRING,
    },
    LastUserUpdate: {
      type: DataTypes.DATE,
    }
  },
  {
    createdAt: false,
    updatedAt: false,
    timestamps: false,
    freezeTableName: true,
    tableName: "Users",
  }
);