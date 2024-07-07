// Aca colocaremos todas las variables de entorno del sistema
// import "dotenv";

const mysql = {
  PORT: process.env.PORT || 3001,
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "plantas_api",
  DB_PORT: process.env.DB_PORT || 3306,
};

export default mysql;

// export const mysql2 = {
//   PORT: process.env.PORT || 3001,
//   DB_HOST: process.env.DB_HOST || "localhost",
//   DB_USER: process.env.DB_USER || "root",
//   DB_PASSWORD: process.env.DB_PASSWORD || "",
//   DB: process.env.DB || "plantas_api",
// };
