import http from "http";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/userRouter.js";

dotenv.config();

const app = express();

const port = process.env.PORT;
app.use(express.json());

app.use(cors());
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server running at fucking http://localhost:${port}`);
});
