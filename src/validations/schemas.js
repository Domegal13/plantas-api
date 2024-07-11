import Joi from "joi";

export const PlantaSchema = Joi.object({
  nombre: Joi.string().min(3).max(50).required(),

  descripcion: Joi.string().required(),

  caracteristicas: Joi.string().required(),

  sustrato: Joi.string().max(50),

  riego: Joi.string(),

  poda: Joi.string(),

  origen: Joi.string(),
});

export const UpdatePlantaSchema = Joi.object({
  nombre: Joi.string().min(3).max(50),

  descripcion: Joi.string(),

  caracteristicas: Joi.string(),

  sustrato: Joi.string(),

  riego: Joi.string(),

  poda: Joi.string(),

  origen: Joi.string(),
});
