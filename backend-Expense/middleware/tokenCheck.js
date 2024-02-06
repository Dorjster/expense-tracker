import jwt from "jsonwebtoken";

export const tokenCheck = async (req, res, next) => {
  const token = req.headers.authorization;
  //   const token =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDcxOTIwNDEsImV4cCI6MTcwNzE5NTY0MX0.0ssTdU9zsx0a-JUCRNZgAollyaH0P19R1ebWJ_aJtmQ";
  jwt.verify(
    token,
    process.env.JWT_SECRET || "defaultSecret",
    (err, result) => {
      if (err) {
        console.log(err);
        result.status(401).send("token is invalid or expired");
      } else {
        console.log(result);
        next();
      }
    }
  );
};
