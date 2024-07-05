import { DataTypes, UUIDV4 } from "sequelize";
import db from "../database/db.js";

const plantasModel = db.define("plantas_api", {
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  caracteristicas: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sustrato: {
    type: DataTypes.STRING,
  },
  riego: {
    type: DataTypes.STRING,
  },
  poda: {
    type: DataTypes.STRING,
  },
  origen: {
    type: DataTypes.STRING,
  },
});

export default plantasModel;
