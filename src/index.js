import app from "./src/app.js";
import db from "./src/database/db.js";

const PORT = process.env.PORT || 3001;

const testConnectionDB = async () => {
  try {
    await db.authenticate();
    console.log("Conexion exitosa a la Base de Datos");
  } catch (error) {
    console.log(`Error al conectar la DB; ${error}`);
  }
};

app.listen(PORT, () => {
  testConnectionDB();
  console.log(`--------------Server runnig on port: ${PORT}`);
});
