import express from "express";
import userRouter from "./routes/userRouter.js";
import cors from "cors";
// const pg = require("pg");
import pg from "pg";

const CONNECTION_STRING =
  "postgresql://thebuyndorj:fyk5bqmroO1W@ep-silent-tooth-a1772o7c.ap-southeast-1.aws.neon.tech/dorjoht?sslmode=require";

export const client = new pg.Client({
  connectionString: CONNECTION_STRING,
});

const dbInit = async () => {
  await client.connect();
  await createUserTable();
};

dbInit();

client.on("error", (error) => {
  console.log("error", error);
});

const createUserTable = async () => {
  const query = `CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    age SMALLINT 
  ) `;

  const result = await client.query(query);
};

const port = 4000;
const app = express();
app.use(express.json());
app.use(cors());

app.use(userRouter);

app.listen(port, () => {
  console.log(`Server is running on port localhost:${port}`);
});
