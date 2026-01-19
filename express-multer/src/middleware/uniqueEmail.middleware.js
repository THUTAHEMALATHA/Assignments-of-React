const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "../db.json");

const uniqueEmail = (req, res, next) => {
  const { email } = req.body;
  const data = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
  const exists = data.users.find(user => user.email === email);

  if (exists) {
    return res.status(409).json({ error: "Email already exists" });
  }

  next();
};

module.exports = uniqueEmail;
