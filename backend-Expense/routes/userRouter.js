import express from "express";
import {
  getUserbyEmailService,
  createUserService,
  postRequestService,
} from "../controllers/userController.js";

import { authentication } from "../middleware/authentication.js";
import { tokenCheck } from "../middleware/tokenCheck.js";

const userRouter = express.Router();

userRouter.get("/users", getUserbyEmailService);

userRouter.post("/signup", createUserService);

userRouter.post("/login", authentication, postRequestService);
userRouter.post("/token", tokenCheck);

export default userRouter;
