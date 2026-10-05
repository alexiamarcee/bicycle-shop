import { OrderItem } from "./order-item.model";
import { Order } from "../orders/order.model";
import { Bicycle } from "../bicycles/bicycle.model";
import { Op } from "sequelize";

export class OrderItemService {
    static async findAll() {
        return OrderItem.findAll({
            order: [["id", "ASC"]],
        });
    }

    static async findById(id: number) {
        return OrderItem.findByPk(id);
    }

    static async findByBicyclePriceRange(min: number, max: number) {
        return OrderItem.findAll({
            include: [
                {
                    model: Order,
                    as: "order",
                    attributes: ["id", "customerId", "orderDate", "status"],
                },
                {
                    model: Bicycle,
                    as: "bicycle",
                    attributes: ["id", "model", "price"],
                    where: { price: { [Op.between]: [min, max] } },
                },
            ],
            order: [["id", "ASC"]],
        });
    }

    static async create(data: {
        orderId: number;
        bicycleId: number;
        quantity: number;
        unitPrice: number;
    }) {
        return OrderItem.create(data);
    }

    static async update(
        orderItem: OrderItem,
        data: {
            orderId?: number;
            bicycleId?: number;
            quantity?: number;
            unitPrice?: number;
        }
    ) {
        return orderItem.update(data);
    }

    static async delete(orderItem: OrderItem) {
        await orderItem.destroy();
    }
}