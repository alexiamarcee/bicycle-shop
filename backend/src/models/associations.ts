import { Bicycle } from "../modules/bicycles/bicycle.model"
import { Brand } from "../modules/brands/brand.model"
import { BicycleDetail } from "../modules/bicycle-details/bicycle-details.model"
import { Customer } from "../modules/customers/customer.model"
import { Order } from "../modules/orders/order.model"

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