import {
    Model,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
} from "sequelize";

import { sequelize } from "../../config/database";

export class Customer extends Model<
    InferAttributes<Customer>,
    InferCreationAttributes<Customer>
> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare email: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}
Customer.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(160),
            allowNull: false,
            unique: true
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        sequelize,
        tableName: "customers",
        modelName: "Customer",
        timestamps: true,
    }
);