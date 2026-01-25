import { error } from "node:console";

export default (err, req, res, next) => {
  res.status(500).json({
    error: err.message,
  });
};
