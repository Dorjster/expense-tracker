import fs from "fs";
import { makeHash } from "../../utils/password-hash.js";

const userDB =
  "/Users/buyndorj/Desktop/incomeExpense/backend-Expense/models/users.json";

export const createUser = async (req, res) => {
  const { username, email, password, repassword } = req.body;
  try {
    if (!username || !email || !password || !repassword) {
      throw new Error("Please fill all the fields");
    }

    if (password !== repassword) {
      throw new Error("Passwords do not match");
    }

    const newUserFile = await fs.readFileSync(userDB, "utf-8");

    const data = JSON.parse(newUserFile);
    if (data.find((user) => user.email === email)) {
      throw new Error("User already exists");
    }

    data.push({
      username,
      email,
      password: makeHash(password),
    });

    await fs.writeFileSync(userDB, JSON.stringify(data));

    return "success";
  } catch (error) {
    throw new Error(error.message);
  }
};
