const express = require("express");
const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");
const cloudinary = require("../config/cloudinary.config");
const upload = require("../middleware/upload.middleware");
const uniqueEmail = require("../middleware/uniqueEmail.middleware");

const router = express.Router();
const dbPath = path.join(__dirname, "../db.json");

router.post(
  "/signup",
  upload.single("profile"),
  uniqueEmail,
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "Profile image is required" });
      }

      const result = await cloudinary.uploader.upload(
        `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`
      );

      const { name, email, password } = req.body;
      const data = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

      const newUser = {
        id: uuid(),
        name,
        email,
        password,
        profilePic: result.secure_url
      };

      data.users.push(newUser);
      fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

      res.status(201).json({
        message: "User registered successfully",
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          profilePic: newUser.profilePic
        }
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

module.exports = router;
