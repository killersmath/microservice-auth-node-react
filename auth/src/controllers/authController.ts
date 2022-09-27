import { NextFunction, Response } from "express";

import createError from "http-errors";

import { TypedRequestBody, WithStatus } from "../helpers/typedExpress";
import AuthService from "../services/authService";
import { SignUpBodyDTO, LogInBodyDTO } from "../dtos/authDTO";

type TokenResponse = WithStatus<{
  token: string;
  name: string;
  email: string;
}>;

export default class AuthController {
  static register = async (req: TypedRequestBody<SignUpBodyDTO>, res: Response<TokenResponse>, next: NextFunction) => {
    
    try {
      const { name, email, password } = req.body;

      const token = await AuthService.signUp({ name, email, password });
  
      res.status(200).json({
        status: true,
        message: "User created sucessfully",
        data: {
          token,
          name,
          email,
        },
      });
    } catch (err) {
      next(new createError.InternalServerError(err.message));
    }
  };
  
  static login = async (req: TypedRequestBody<LogInBodyDTO>, res: Response<TokenResponse>, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      const { token, name } = await AuthService.signIn({ email, password });

      res.status(200).json({
        status: true,
        message: "Account login successful",
        data: {
          token,
          name: name,
          email: email,
        },
      });
    } catch (err) {
      next(new createError.InternalServerError(err.message));
    }
  };
  
}
