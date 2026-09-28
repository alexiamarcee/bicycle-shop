import { Request, Response, NextFunction } from "express";
import { BicycleService } from "./bicycle.service";

export class BicycleController {
    
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const bicycles = await BicycleService.findAll();
            res.json(bicycles);
        } catch (error) {
            next(error);
        }
    }
    
    static async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const bicycles = await BicycleService.findById(id);
            if (!bicycles) {
                res.status(404).json({
                    message: "Bicicleta no encontrada",
                });
                return;
            }
            res.json(bicycles);
        } catch (error) {
            next(error);
        }
    }

    static async getEagerlyById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const bicycles = await BicycleService.findEagerlyById(id);
            if (!bicycles) {
                res.status(404).json({
                    message: "Bicicleta no encontrada",
                });
                return;
            }
            res.json(bicycles);
        } catch (error) {
            next(error);
        }
    }
    
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { brandId, model, description, price, stock } = req.body;
            if (!brandId || !model || price === undefined) {
                res.status(400).json({
                    message: "La marca, el modelo y el precio son obligatorios",
                });
                return;
            }
            const bicycles = await BicycleService.create({
                brandId,
                model,
                description,
                price,
                stock,
            });
            res.status(201).json(bicycles);
        } catch (error) {
            next(error);
        }
    }
    
    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const bicycles = await BicycleService.findById(id);
            if (!bicycles) {
                res.status(404).json({
                    message: "Bicicleta no encontrada",
                });
                return;
            }
            const updatedBicycle = await BicycleService.update(
                bicycles,
                req.body
            );
            res.json(updatedBicycle);
        } catch (error) {
            next(error);
        }
    }
    
    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const bicycles = await BicycleService.findById(id);
            if (!bicycles) {
                res.status(404).json({
                    message: "Bicicleta no encontrada",
                });
                return;
            }
            await BicycleService.delete(bicycles);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}