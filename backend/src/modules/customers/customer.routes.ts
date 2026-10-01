import { Router } from "express";
import { CustomerController } from "./customer.controller";

const router = Router();

router.get("/", CustomerController.getAll);

router.get("/:name_search/orders", CustomerController.getCustomersWithOrdersByNameSearch);

router.get("/:id", CustomerController.getById);

router.post("/", CustomerController.create);

router.put("/:id", CustomerController.update);

router.delete("/:id", CustomerController.delete);

export default router;