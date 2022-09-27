import { Router } from "express";

import AuthController from "../controllers/authController";

const router = Router();

router.post("/signup", AuthController.register);
router.post("/signin", AuthController.login);

export default router;
