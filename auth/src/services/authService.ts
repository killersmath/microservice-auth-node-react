import User, { UserCreationAttributes } from "../models/User";

import createError from "http-errors";
import { signAccessToken } from "../utils/tokenHandler";

export default class AuthService {
  static signUp = async (data: UserCreationAttributes): Promise<string> => {
    const createdUser = await User.create(data);

    const payload = {
      id: createdUser.id,
      email: data.email,
      name: data.name,
    };

    const token = await signAccessToken(payload);

    return token;
  };

  static signIn = async (data: { email: string, password: string }): Promise<{ token: string, name: string}> => {
    const { email, password } = data;

    const user = await User.findOne({ where: { email } });

    if (!user || !(await user.validPassword(password))) {
      throw new createError.Unauthorized("Invalid Password or Email.");
    }

    const payload = {
      id: user.id,
      email: user.email,
      name: user.name,
    };

    const token = await signAccessToken(payload);

    return { token, name: user.name };
  };
}
