import { createNewUser } from "../queries/user/createUser.js";
import { getLoggedInUser } from "../queries/user/getLoggeninuser.js";

export const createNewUserService = async (req, res) => {
  try {
    const data = await createNewUser(req);
    res.send(JSON.stringify(data));
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const getRefreshTokenService = async (req, res) => {
  try {
    const user = await getLoggedInUser(req, res);

    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
