import express from "express";
import recordRouter from "./routes/record.router.js";
// import categoryRouter from "./routes/category.router.js";
import userRouter from "./routes/userRouter.js";
import cors from "cors";
// const pg = require("pg");
import pg from "pg";

const CONNECTION_STRING =
  "postgresql://chinzorigt003:4lhm6UHTCkAJ@ep-withered-star-a18irjqa.ap-southeast-1.aws.neon.tech/anzog?sslmode=require";

export const client = new pg.Client({
  connectionString: CONNECTION_STRING,
});

const dbInit = async () => {
  await client.connect();
  await client.query("SET statement_timeout = 0");
  // await createUserTable();
  // await createRecordTable();
};

dbInit();

const createUserTable = async () => {
  const query = `CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    age SMALLINT 
  ) `;

  await client.query(query);
};

const createRecordTable = async () => {
  const query = `CREATE TABLE IF NOT EXISTS records(
    id SERIAL PRIMARY KEY,
    recordType TEXT NOT NULL,
    amount INT NOT NULL,
    category TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    payee TEXT NOT NULL,
    note TEXT NOT NULL 
  ) `;

  await client.query(query);
};

const port = 8000;
const app = express();
app.use(express.json());
app.use(cors());

app.use(userRouter);

app.use("/record", recordRouter);
// app.use("/category", categoryRouter);

app.listen(port, () => {
  console.log(`Server is running on port localhost:${port}`);
});
