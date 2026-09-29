import {
    Model,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
} from "sequelize";

import { sequelize } from "../../config/database";

export class BicycleDetail extends Model<
    InferAttributes<BicycleDetail>,
    InferCreationAttributes<BicycleDetail>
> {
    declare id: CreationOptional<number>;
    declare bicycleId: number;
    declare frameMaterial: "Aluminum" | "Carbon" | "Steel" | "Titanium";
    declare wheelSize: number;
    declare weight: number;
    declare suspension: CreationOptional<string | null>;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}
BicycleDetail.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        bicycleId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        frameMaterial: {
            type: DataTypes.ENUM("Aluminum", "Carbon", "Steel", "Titanium")
        },
        wheelSize: {
            type: DataTypes.DECIMAL(4, 1),
            allowNull: false,
        },
        weight: {
            type: DataTypes.DECIMAL(5, 2)
        },
        suspension: {
            type: DataTypes.STRING(80),
            allowNull: true,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        sequelize,
        tableName: "bicycle-details",
        modelName: "BicycleDetail",
        timestamps: true,
    }
);