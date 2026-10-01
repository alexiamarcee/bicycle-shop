import { app } from "./app";
import { sequelize } from "./config/database";
import { env } from "./config/env";
import { defineAssociations, defineDetails, defineCustomer } from "./models/associations";

import "./modules/bicycles/bicycle.model";
import "./modules/brands/brand.model";
import "./modules/bicycle-details/bicycle-details.model";
import "./modules/customers/customer.model";
import "./modules/orders/order.model";

async function startServer() {
    try {

        defineAssociations();
        defineDetails();
        defineCustomer();

        await sequelize.authenticate();
        console.log("MySQL connection established.");
        
        await sequelize.sync({ force: true });
        console.log("Models synchronized.");

        app.listen(env.PORT, () => {
            console.log(
                `Server running at http://localhost:${env.PORT}`
            );
        });

    } catch (error) {
        console.error(
            "Could not start the application:",
            error
        );
        process.exit(1);
    }
}

startServer();