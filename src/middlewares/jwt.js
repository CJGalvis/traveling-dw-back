import jwt from "jsonwebtoken";

//middleware para obtener un token valido
export const verifyToken = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token)
      return res.status(401).send({
        message: "Authorization invalid",
      });
    const payload = jwt.verify(token, process.env.JWT_SECRET || "");
    req.user = payload.email;
    next();
  } catch (error) {
    res.status(500).send({
      message: error.message,
      error,
    });
  }
};
