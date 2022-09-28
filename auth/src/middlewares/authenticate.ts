import { Request, Response, NextFunction } from "express";
import createError from "http-errors";

const AuthProvider = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
        return next(new createError.Unauthorized("Access token is required"));
    }
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
        return next(new createError.Unauthorized("Access token is malformed"));
    }
}

export default AuthProvider;