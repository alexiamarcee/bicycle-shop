import { Router } from "express";
import bicycleRoutes from "../modules/bicycles/bicycle.routes";
import brandRoutes from "../modules/brands/brand.routes";
import bicycleDetailRoutes from "../modules/bicycle-details/bicycle-details.routes";
import customerRoutes from "../modules/customers/customer.routes";
import orderRoutes from "../modules/orders/order.routes";

const router = Router();

router.use("/bicycles", bicycleRoutes);
router.use("/brands", brandRoutes);
router.use("/bicycle-details", bicycleDetailRoutes);
router.use("/customers", customerRoutes);
router.use("/orders", orderRoutes);

export default router;