import { Router } from "express";
import { BicycleController } from "./bicycle.controller";

const router = Router();

router.get("/", BicycleController.getAll);

router.get("/eager/:id", BicycleController.getEagerById);

router.get("/:id", BicycleController.getById);

router.post("/", BicycleController.create);

router.put("/:id", BicycleController.update);

router.delete("/:id", BicycleController.delete);

export default router;