import { Router } from "express";
import { validateSchema } from "../validations/middleware.js";
import { PlantaSchema, UpdatePlantaSchema } from "../validations/schemas.js";

import {
  deletePlanta,
  getPlantaId,
  getPlantas,
  postPlanta,
  putPlanta,
} from "../controllers/plantasController.js";

const router = Router();

router.post("/", validateSchema(PlantaSchema), postPlanta);
router.get("/", getPlantas);
router.get("/:id", getPlantaId);
router.put("/:id", validateSchema(UpdatePlantaSchema), putPlanta);
router.delete("/:id", deletePlanta);

export default router;
