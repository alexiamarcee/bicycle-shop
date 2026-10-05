import { Bicycle } from "../modules/bicycles/bicycle.model"
import { Brand } from "../modules/brands/brand.model"
import { BicycleDetail } from "../modules/bicycle-details/bicycle-details.model"
import { Customer } from "../modules/customers/customer.model"
import { Order } from "../modules/orders/order.model"
import { OrderItem } from "../modules/order-items/order-item.model"

export function defineAssociations() {
    Brand.hasMany(Bicycle, { foreignKey: "brandId", as: "bicycles" });
    Bicycle.belongsTo(Brand, { foreignKey: "brandId", as: "brand" });
}

export function defineDetails() {
    Bicycle.hasOne(BicycleDetail, { foreignKey: "bicycleId", as: "detail", onDelete: "CASCADE" });
    BicycleDetail.belongsTo(Bicycle, { foreignKey: "bicycleId", as: "bicycle" });
}

export function defineCustomer() {
    Customer.hasMany(Order, { foreignKey: "customerId", as: "orders" });
    Order.belongsTo(Customer, { foreignKey: "customerId", as: "customer" });
}

export function defineOrder() {
    Order.belongsToMany(Bicycle, { through: OrderItem, foreignKey: "orderId", otherKey: "bicycleId", as: "bicycles", });
    Bicycle.belongsToMany(Order, { through: OrderItem, foreignKey: "bicycleId", otherKey: "orderId", as: "orders" });
    Order.hasMany(OrderItem, { foreignKey: "orderId", as: "items" });
    OrderItem.belongsTo(Order, { foreignKey: "orderId", as: "order" });
    Bicycle.hasMany(OrderItem, { foreignKey: "bicycleId", as: "orderItems" });
    OrderItem.belongsTo(Bicycle, { foreignKey: "bicycleId", as: "bicycle" });
}