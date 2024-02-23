import fs from "fs";
import { makeHash } from "../../utils/passwordHash.js";
import { client } from "../../index.js";

const userDB =
  "/Users/23LP4507/Desktop/untitled folder/income-expense/backend-income-expense/models/users.json";

const createUser = async (email, password, username) => {
  const userCreateQuery = `
    INSERT INTO users(email,password,username) VALUES ($1,$2,$3) RETURNING id`;

  const userID = await client.query(userCreateQuery, [
    email,
    password,
    username,
  ]);

  return userID;
};

export const createNewUser = async (req, res) => {
  const { username, email: upEmail, password } = req.body;

  try {
    if (!username || !upEmail || !password) {
      throw new Error("Please fill all the fields");
    }

    if (password.length < 5) {
      console.log("password length");
      throw new Error("Password must be at least 5 characters long");
    }

    const newUserFile = await fs.readFileSync(userDB, "utf-8");

    const data = JSON.parse(newUserFile);

    if (data.find(({ email }) => email === upEmail)) {
      console.log(data);
      throw new Error("User already exists");
    }

    const Password = makeHash(password);

    data.push({
      username,
      email: upEmail,
      password: makeHash(password),
    });

    const userId = await createUser(upEmail, Password, username);
    console.log(userId);
    return userId;
    return "User created successfully";
  } catch (error) {
    throw new Error(error.message);
  }
};
