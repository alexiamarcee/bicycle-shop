import { Router } from "express";
import { BrandController } from "./brand.controller";

const router = Router();

router.get("/", BrandController.getAll);

router.get("/:id", BrandController.getById);

router.post("/", BrandController.create);

router.put("/:id", BrandController.update);

router.delete("/:id", BrandController.delete);

export default router;