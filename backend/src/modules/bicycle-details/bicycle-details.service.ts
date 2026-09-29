import { BicycleDetail } from "./bicycle-details.model";
import { FindOptions } from "sequelize";

export class BicycleDetailService {
    static async findAll() {
        return BicycleDetail.findAll({
            order: [["id", "ASC"]],
        });
    }

    static async findById(id: number, options?: FindOptions) {
        return BicycleDetail.findByPk(id, options);
    }
    
    static async create(data: {
        bicycleId: number;
        frameMaterial: "Aluminum" | "Carbon" | "Steel" | "Titanium";
        wheelSize: number;
        weight: number;
        suspension?: string | null;
    }) {
        return BicycleDetail.create(data);
    }
    
    static async update(
        bicycleDetail: BicycleDetail,
        data: {
            bicycleId?: number;
            frameMaterial?: "Aluminum" | "Carbon" | "Steel" | "Titanium";
            wheelSize?: number;
            weight?: number;
            suspension?: string | null;
        }
    ) {
        return bicycleDetail.update(data);
    }
    
    static async delete(bicycleDetail: BicycleDetail) {
        await bicycleDetail.destroy();
    }
}