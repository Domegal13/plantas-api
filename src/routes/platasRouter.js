import { Router } from "express";

const router = Router();

router.post("/", postPlanta);
router.get("/", getPlantas);
router.get("/:id", getPlantasId);
router.put("/:id", putPlanta);
router.delete("/:id", deletePlanta);

export default router;
