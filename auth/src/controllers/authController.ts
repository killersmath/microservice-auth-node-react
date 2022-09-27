import { Response } from "express";

import jwt from "jsonwebtoken";

import { TypedRequestBody } from "../helpers/typedExpress";
import User from "../models/User";
import jwtConfig from "../configs/jwtConfig";

type ErrorResponse = {
  error: string;
};

type TokenResponse = {
  token: string;
  name: string;
  email: string;
};

type SignUpBodyDTO = {
  name: string;
  email: string;
  password: string;
};

export const signUpController = async (req: TypedRequestBody<SignUpBodyDTO>, res: Response<TokenResponse | ErrorResponse>) => {
  const { name, email, password } = req.body;

  try {
    const createdUser = await User.create({ name, email, password });

    const payload = {
      id: createdUser.id,
      email,
      name,
    };

    const token = await jwt.sign(payload, jwtConfig.JWT_SECRET);

    if (!token) {
      res.status(500).json({
        error: "Empty token",
      });
      return;
    }

    res.status(200).json({
      token,
      name,
      email,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

type LogInBodyDTO = {
  email: string;
  password: string;
};

export const logInController = async (req: TypedRequestBody<LogInBodyDTO>, res: Response<TokenResponse | ErrorResponse>) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  try {
    if (!(await user.validPassword(password))) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const payload = {
      id: user.id,
      email: user.email,
      name: user.name,
    };

    const token = jwt.sign(payload, jwtConfig.JWT_SECRET);

    if (!token) {
      res.status(500).json({
        error: "Empty token",
      });
      return;
    }

    res.status(200).json({ token, name: user.name, email });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};
