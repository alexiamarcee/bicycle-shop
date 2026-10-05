import { Request, Response, NextFunction } from "express";
import { OrderItemService } from "./order-item.service";

export class OrderItemController {

    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const orderItems = await OrderItemService.findAll();
            res.json(orderItems);
        } catch (error) {
            next(error);
        }
    }

    static async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const orderItem = await OrderItemService.findById(id);
            if (!orderItem) {
                res.status(404).json({
                    message: "Order item not found",
                });
                return;
            }
            res.json(orderItem);
        } catch (error) {
            next(error);
        }
    }

    static async getByBicyclePriceRange(req: Request, res: Response, next: NextFunction) {
        try {
            const min = Number(req.query.min ?? 1);
            const max = Number(req.query.max ?? 10000);

            if (Number.isNaN(min) || Number.isNaN(max)) {
                res.status(400).json({ message: "min and max must be numbers" });
                return;
            }
            if (min < 1 || max > 10000 || min > max) {
                res.status(400).json({ message: "search price must be between 1 and 10000" });
                return;
            }

            const orderItems = await OrderItemService.findByBicyclePriceRange(min, max);
            res.json(orderItems);
        } catch (error) {
            next(error);
        }
    }

    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { orderId, bicycleId, quantity, unitPrice } = req.body;
            if (!orderId || !bicycleId || !quantity || unitPrice === undefined) {
                res.status(400).json({
                    message: "orderId, bicycleId, quantity and unitPrice are required",
                });
                return;
            }
            const orderItem = await OrderItemService.create({
                orderId,
                bicycleId,
                quantity,
                unitPrice
            });
            res.status(201).json(orderItem);
        } catch (error) {
            next(error);
        }
    }

    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const orderItem = await OrderItemService.findById(id);
            if (!orderItem) {
                res.status(404).json({
                    message: "Order item not found",
                });
                return;
            }
            const { orderId, bicycleId, quantity, unitPrice } = req.body;
            const updatedOrderItem = await OrderItemService.update(
                orderItem,
                {
                    orderId,
                    bicycleId,
                    quantity,
                    unitPrice
                }
            );
            res.json(updatedOrderItem);
        } catch (error) {
            next(error);
        }
    }

    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const orderItem = await OrderItemService.findById(id);
            if (!orderItem) {
                res.status(404).json({
                    message: "Order item not found",
                });
                return;
            }
            await OrderItemService.delete(orderItem);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}