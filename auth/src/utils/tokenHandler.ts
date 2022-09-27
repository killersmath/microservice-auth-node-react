import jwt, { JwtPayload } from "jsonwebtoken";
import createError from "http-errors";

import jwtConfig from "../configs/jwtConfig";

export const signAccessToken = async (payload: object) : Promise<string> => {
    try {
        const token = await jwt.sign(payload, jwtConfig.JWT_SECRET);
        return token;
    } catch (e) {
        console.error(e);
        throw new createError.InternalServerError();
    }
}

export const verifyAccessToken = async (token: string) : Promise<JwtPayload | string> => {
    try {
        const result = await jwt.verify(token, jwtConfig.JWT_SECRET);
        return result;
    } catch (e) {
        console.error(e);
        throw new createError.InternalServerError();
    }
}