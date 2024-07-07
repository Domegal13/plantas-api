// import "dotenv/config";
import { Sequelize } from "sequelize";
import mysql from "../../config.js";

const db = new Sequelize(mysql.database, mysql.user, mysql.password, {
  host: mysql.host,
  dialect: "mysql",
  port: 3306,
});

export default db;
