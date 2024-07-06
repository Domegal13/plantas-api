import "dotenv/config";
import { Sequelize } from "sequelize";
import mysql from "../../config.js";

const db = new Sequelize(mysql.database, mysql.user, "", {
  host: mysql.host,
  dialect: "mysql",
  port: mysql.DB_PORT,
});

export default db;

// const db = new Sequelize(mysql.DB_NAME, mysql.DB_USER, mysql.DB_PASSWORD, {
//   host: mysql.DB_HOST,
//   dialect: "mysql",
//   port: mysql.DB_PORT,
// });

// export default db;
