import { Bicycle } from "../modules/bicycles/bicycle.model"
import { Brand } from "../modules/brands/brand.model"
import { BicycleDetail } from "../modules/bicycle-details/bicycle-details.model"

export function defineAssociations() {
    Brand.hasMany(Bicycle, { foreignKey: "brandId", as: "bicycles" });
    Bicycle.belongsTo(Brand, { foreignKey: "brandId", as: "brand" });
}

export function defineDetails() {
    Bicycle.hasOne(BicycleDetail, { foreignKey: "bicycleId", as: "detail", onDelete: "CASCADE" });
    BicycleDetail.belongsTo(Bicycle, { foreignKey: "bicycleId", as: "bicycle" });
}