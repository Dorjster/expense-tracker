import express from "express";
import {
  getUserbyEmailService,
  createUserService,
} from "../controllers/userController.js";

import { authentication } from "../middleware/authentication.js";

const userRouter = express.Router();

userRouter.get("/users", getUserbyEmailService);

userRouter.post("/signup", createUserService);

userRouter.post("/login", authentication, getUserbyEmailService);

export default userRouter;
