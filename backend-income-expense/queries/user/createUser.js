import { client } from "../../index.js";
import { makeHash } from "../../utils/passwordHash.js";

const userCreate = async (username, email, password) => {
  const createUserQuery = `
    INSERT INTO users(username, email, password)
    VALUES ($1, $2, $3 )
    RETURNING id`;
  const userId = await client.query(createUserQuery, [
    username,
    email,
    makeHash(password),
  ]);

  return userId;
};

export const createNewUser = async (req, res) => {
  const { username, email, password } = req.body;
  const checkEmailQuery = `SELECT * FROM users WHERE email = $1`;
  const existingUser = await client.query(checkEmailQuery, [email]);
  console.log("after connect");
  try {
    if (existingUser.rows.length > 0) {
      return "User already exists";
    }

    const userId = await userCreate(username, email, password);

    return;
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
