import "dotenv/config";
import { Sequelize } from "sequelize";
import mysql from "../../config.js";

const db = new Sequelize(mysql.database, mysql.user, "", {
  host: mysql.host,
  dialect: "mysql",
  port: mysql.DB_PORT,
});

export default db;
