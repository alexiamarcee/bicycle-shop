import { Request, Response, NextFunction } from "express";
import { OrderService } from "./order.service";

export class OrderController {
    
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const orders = await OrderService.findAll();
            res.json(orders);
        } catch (error) {
            next(error);
        }
    }

    static async getByCustomerId(req: Request, res: Response, next: NextFunction) {
        try {
            const customerId = Number(req.params.id);
            const orders = await OrderService.findByCustomerId(customerId);
            
            res.json(orders);
        } catch (error) {
            next(error);
        }
    }
    
    static async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const order = await OrderService.findById(id);
            if (!order) {
                res.status(404).json({
                    message: "Order not found",
                });
                return;
            }
            res.json(order);
        } catch (error) {
            next(error);
        }
    }
    
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { customerId, orderDate, status } = req.body;
            if (!customerId) {
                res.status(400).json({
                    message: "customerId is required",
                });
                return;
            }
            const order = await OrderService.create({
                customerId,
                orderDate,
                status,
            });
            res.status(201).json(order);
        } catch (error) {
            next(error);
        }
    }
    
    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const order = await OrderService.findById(id);
            if (!order) {
                res.status(404).json({
                    message: "Order not found",
                });
                return;
            }
            const { customerId, orderDate, status } = req.body;
            const updatedOrder = await OrderService.update(
                order, 
                { 
                    customerId, 
                    orderDate, 
                    status 
                }
            );
            res.json(updatedOrder);
        } catch (error) {
            next(error);
        }
    }
    
    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const order = await OrderService.findById(id);
            if (!order) {
                res.status(404).json({
                    message: "Order not found",
                });
                return;
            }
            await OrderService.delete(order);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}