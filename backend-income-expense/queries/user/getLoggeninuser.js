import { client } from "../../index.js";
import jwt from "jsonwebtoken";

export const getLoggedInUser = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) throw new Error("Not logged in");

    const decoded = jwt.verify(token, "secret");

    const { rows } = await client.query(
      `SELECT * FROM users WHERE email = $1 LIMIT 1`,
      [decoded?.email]
    );

    return rows[0];
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
