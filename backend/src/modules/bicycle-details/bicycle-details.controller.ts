import { Request, Response, NextFunction } from "express";
import { BicycleDetailService } from "./bicycle-details.service";

export class BicycleDetailController {
    
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const bicycleDetail = await BicycleDetailService.findAll();
            res.json(bicycleDetail);
        } catch (error) {
            next(error);
        }
    }
    
    static async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const bicycleDetail = await BicycleDetailService.findById(id);
            if (!bicycleDetail) {
                res.status(404).json({
                    message: "Bicycle details not found",
                });
                return;
            }
            res.json(bicycleDetail);
        } catch (error) {
            next(error);
        }
    }
    
    static async create(req: Request, res: Response, next: NextFunction) {
            try {
                const { bicycleId, frameMaterial, wheelSize, weight, suspension } = req.body;
                if (bicycleId === undefined || !frameMaterial || wheelSize === undefined || weight === undefined) {
                    res.status(400).json({
                        message: "Bicycle ID, frame material and wheel size are required",
                    });
                    return;
                }
                const bicycleDetail = await BicycleDetailService.create({
                    bicycleId,
                    frameMaterial,
                    wheelSize,
                    weight,
                    suspension,
                });
                res.status(201).json(bicycleDetail);
            } catch (error) {
                next(error);
            }
        }
    
    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const bicycleDetail = await BicycleDetailService.findById(id);
            if (!bicycleDetail) {
                res.status(404).json({
                    message: "Bicycle details not found",
                });
                return;
            }
            const updatedBicycleDetail = await BicycleDetailService.update(
                bicycleDetail,
                req.body
            );
            res.json(updatedBicycleDetail);
        } catch (error) {
            next(error);
        }
    }
    
    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const bicycleDetail = await BicycleDetailService.findById(id);
            if (!bicycleDetail) {
                res.status(404).json({
                    message: "Bicycle details not found",
                });
                return;
            }
            await BicycleDetailService.delete(bicycleDetail);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}