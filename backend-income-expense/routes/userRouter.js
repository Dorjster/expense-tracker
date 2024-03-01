import express from "express";
import { createNewUserService } from "../controllers/usersController.js";
import { getRefreshTokenService } from "../controllers/usersController.js";
import { loginUser } from "../middleware/loginUser.js";
import { tokenCheck } from "../middleware/tokenCheck.js";

const userRouter = express.Router();

userRouter.post("/users", createNewUserService);
userRouter.post("/users/login", loginUser);
userRouter.get("/users/refresh", getRefreshTokenService);
userRouter.get("/users/me", tokenCheck);

export default userRouter;
