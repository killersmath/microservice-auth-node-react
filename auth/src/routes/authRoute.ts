import { Router } from "express";

import { signUpController, logInController } from "../controllers/authController";

const router = Router();

router.post("/signup", signUpController);
router.post("/signin", logInController);

export default router;
