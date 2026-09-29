import { app } from "./app";
import { sequelize } from "./config/database";
import { env } from "./config/env";
import { defineAssociations, defineDetails } from "./models/associations";

import "./modules/bicycles/bicycle.model";
import "./modules/brands/brand.model";
import "./modules/bicycle-details/bicycle-details.model";

async function startServer() {
    try {

        defineAssociations();
        defineDetails();

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