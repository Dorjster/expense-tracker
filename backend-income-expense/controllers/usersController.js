import { createNewUser } from "../queries/user/createUser.js";

export const getLoggedInUserService = async (req, res) => {
  try {
    res.status(200);
    res.send(req.Token);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const createNewUserService = async (req, res) => {
  try {
    const data = await createNewUser(req);
    res.send(JSON.stringify(data));
  } catch (err) {
    res.status(400).send(err.message);
  }
};
