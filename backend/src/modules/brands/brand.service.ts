import { Brand } from "./brand.model";

export class BrandService {
    static async findAll() {
        return Brand.findAll({
            order: [["name", "ASC"]],
        });
    }
    
    static async findById(id: number) {
        return Brand.findByPk(id);
    }
    
    static async create(data: {
        name: string;
    }) {
        return Brand.create(data);
    }
    
    static async update(
        brand: Brand,
        data: {
            name?: string;
        }
    ) {
        return brand.update(data);
    }
    
    static async delete(brand: Brand) {
        await brand.destroy();
    }
}