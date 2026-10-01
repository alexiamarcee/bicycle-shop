import { Customer } from "./customer.model";
import { Order } from "../orders/order.model";
import { Op } from "sequelize";

export class CustomerService {
    static async findAll() {
        return Customer.findAll({
            order: [["id", "ASC"]],
        });
    }

    static async findCustomersWithOrdersByNameSearch(nameSearch: string) {
        return Customer.findAll({
            where: { name: { [Op.like]: `%${nameSearch}%` } },
            include: [{ model: Order, as: "orders", required: true }],
        });
    }
    
    static async findById(id: number) {
        return Customer.findByPk(id);
    }
    
    static async create(data: {
        name: string;
        email: string;
    }) {
        return Customer.create(data);
    }
    
    static async update(
        customer: Customer,
        data: {
            name?: string;
            email?: string;
        }
    ) {
        return customer.update(data);
    }
    
    static async delete(customer: Customer) {
        await customer.destroy();
    }
}