import fs from "fs";
const userDB =
  "/Users/buyndorj/Desktop/incomeExpense/backend-Expense/models/users.json";

export const getUserbyEmail = async (req, res) => {
  try {
    const { email: paramEmail } = req.body;
    const allUsers = await fs.readFileSync(userDB, "utf-8");
    const allUser = JSON.parse(allUsers);

    const exactUser = allUser.find(({ email }) => email === paramEmail);

    if (!exactUser) {
      throw new Error("email not found");
    }

    return exactUser;
  } catch (error) {
    throw new Error(error.message);
  }
};
