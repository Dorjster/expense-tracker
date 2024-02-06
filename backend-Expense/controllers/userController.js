import { authentication } from "../middleware/authentication.js";
import { getUserbyEmail } from "../queries/users/getUser.js";
import { createUser } from "../queries/users/createUser.js";
import jwt from "jsonwebtoken";

export const getUserbyEmailService = async (req, res) => {
  try {
    const user = await getUserbyEmail(req);
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createUserService = async (req, res) => {
  try {
    const user = await createUser(req);
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const loginUserService = async (req, res, next) => {
  try {
    const user = await authentication(req, _, next);
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const postRequestService = async (req, res) => {
  try {
    const token = jwt.sign(
      {
        email: req.body.email,
      },
      process.env.JWT_SECRET || "defaultSecret",
      {
        expiresIn: "1h",
      }
    );

    const postRequest = await getUserbyEmail(req);

    res.send({ ...postRequest, token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
