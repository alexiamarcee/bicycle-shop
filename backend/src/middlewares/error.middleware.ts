import {
    Request, 
    Response, 
    NextFunction,
} from "express";

export function errorMiddleware(
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.error(error);
    
    res.status(500).json({
        message: "Internal server error",
    });
}