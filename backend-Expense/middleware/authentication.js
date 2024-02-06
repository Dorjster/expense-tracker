import fs from "fs";
const userDB =
  "/Users/buyndorj/Desktop/incomeExpense/backend-Expense/models/users.json";
import { compareHash } from "../utils/password-hash.js";

export const authentication = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.send("Please fill all the fields");
    }
    const newUserFile = await fs.readFileSync(userDB, "utf-8");

    const data = JSON.parse(newUserFile);
    const foundUser = data.find((user) => user.email === email);

    if (!foundUser) {
      res
        .status(400)
        .send("Email or password is wrong , try again u piece of shit");
      return;
    }
    const isitTrue = compareHash(password, foundUser.password);

    if (isitTrue === true) {
      next();

      return;
    } else {
      res
        .status(400)
        .send("Email or password is wrong , try again u piece of shit");
      return;
    }
  } catch (error) {
    res.send(error.message);
  }
};
