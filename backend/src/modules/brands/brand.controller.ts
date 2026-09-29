import { Request, Response, NextFunction } from "express";
import { BrandService } from "./brand.service";

export class BrandController {
    
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const brands = await BrandService.findAll();
            res.json(brands);
        } catch (error) {
            next(error);
        }
    }
    
    static async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const brands = await BrandService.findById(id);
            if (!brands) {
                res.status(404).json({
                    message: "Brand not found",
                });
                return;
            }
            res.json(brands);
        } catch (error) {
            next(error);
        }
    }
    
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { name } = req.body;
            if (!name) {
                res.status(400).json({
                    message: "Name is required",
                });
                return;
            }
            const brands = await BrandService.create({
                name,
            });
            res.status(201).json(brands);
        } catch (error) {
            next(error);
        }
    }
    
    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const brands = await BrandService.findById(id);
            if (!brands) {
                res.status(404).json({
                    message: "Brand not found",
                });
                return;
            }
            const updatedBrand = await BrandService.update(
                brands,
                req.body
            );
            res.json(updatedBrand);
        } catch (error) {
            next(error);
        }
    }
    
    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const brands = await BrandService.findById(id);
            if (!brands) {
                res.status(404).json({
                    message: "Brand not found",
                });
                return;
            }
            await BrandService.delete(brands);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}