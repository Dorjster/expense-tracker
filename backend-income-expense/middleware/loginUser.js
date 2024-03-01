import { compareHash } from "../utils/passwordHash.js";
import { client } from "../index.js";
import jwt from "jsonwebtoken";

const getUserQuery = async (email) => {
  const loginUserQuery = `SELECT * FROM users WHERE email = $1`;
  const user = await client.query(loginUserQuery, [email]);
  return user.rows[0];
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      res.status(400).send("Please provide email and password");
    }
    if (email === "" || password === "") {
      res.status(400).send("Please provide email and password");
    }
    const user = await getUserQuery(email);

    if (!user) {
      res.status(400).send("Invalid email or password");
    }

    const checkPassword = compareHash(password, user.password);

    if (!checkPassword) {
      res.status(400).send("Invalid email or password");
    }

    const token = jwt.sign(
      { email: user.email },
      process.env.JWT_SECRET || "secret",
      {
        expiresIn: "1h",
      }
    );

    res.send(token);
    return;
  } catch (error) {
    res.send(error.message);
  }
};

/* SELECT * FROM users WHERE (email) VALUES ($1) */
