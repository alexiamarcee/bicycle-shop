import { Bicycle } from "./bicycle.model";
import { FindOptions } from "sequelize";

export class BicycleService {
    static async findAll() {
        return Bicycle.findAll({
            order: [["id", "ASC"]],
        });
    }
    
    static async findById(id: number, options?: FindOptions) {
        return Bicycle.findByPk(id, options);
    }
    
    static async create(data: {
        brandId: number;
        model: string;
        description?: string | null;
        price: number;
        stock: number;
    }) {
        return Bicycle.create(data);
    }
    
    static async update(
        bicycle: Bicycle,
        data: {
            brandId?: number;
            model?: string;
            description?: string | null;
            price?: number;
            stock?: number;
        }
    ) {
        return bicycle.update(data);
    }
    
    static async delete(bicycle: Bicycle) {
        await bicycle.destroy();
    }
}