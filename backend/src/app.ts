import express from "express";
import apiRouter from "./routes";
import { notFoundMiddleware } from "./middlewares/not-found.middleware";
import { errorMiddleware } from "./middlewares/error.middleware";

export const app = express();

app.use(express.json());
app.use("/api", apiRouter);

app.get("/", (req, res) => {
    res.json({
        message : "API running",
    });
});

app.use("/api", apiRouter);
app.use(notFoundMiddleware);
app.use(errorMiddleware);