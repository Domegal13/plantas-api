// import { DataTypes, Model, UUIDV4 } from "sequelize";
import { DataTypes, UUIDV4 } from "sequelize";
import db from "../database/db.js";

const plantasModel = db.define("plantas", {
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

// Con Clase

// class Planta extends Model {}

// Planta.init(
//   {
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: UUIDV4,
//       primaryKey: true,
//     },
//     nombre: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     descripcion: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     caracteristicas: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     sustrato: {
//       type: DataTypes.STRING,
//     },
//     riego: {
//       type: DataTypes.STRING,
//     },
//     poda: {
//       type: DataTypes.STRING,
//     },
//     origen: {
//       type: DataTypes.STRING,
//     },
//   },
//   {
//     sequelize: db,
//     modelName: "Planta",
//   }
// );

// export default Planta;
