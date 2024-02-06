import bcrypt, { hash } from "bcrypt";

export const makeHash = (password) => {
  const salt = bcrypt.genSaltSync(1);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

export const compareHash = (password, hash) => {
  const isitTrue = bcrypt.compareSync(password, hash);
  return isitTrue;
};
