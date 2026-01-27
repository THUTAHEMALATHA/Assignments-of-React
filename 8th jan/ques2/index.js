const express = require("express");
const os = require("os");
const dns = require("dns");

const readFileData = require("./read");

const app = express();
const PORT = 3000;

// Test route
app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

// Read file route
app.get("/readfile", async (req, res) => {
  try {
    const data = await readFileData();
    res.send(data);
  } catch (error) {
    res.status(500).send("Error reading file");
  }
});

// System details route
app.get("/systemdetails", (req, res) => {
  const totalMemory = (os.totalmem() / 1024 / 1024 / 1024).toFixed(0);
  const freeMemory = (os.freemem() / 1024 / 1024 / 1024).toFixed(0);

  res.json({
    platform: os.platform(),
    totalMemory: `${totalMemory} GB`,
    freeMemory: `${freeMemory} GB`,
    cpuModel: os.cpus()[0].model,
    cpuCores: os.cpus().length // bonus
  });
});

// Get IP route
app.get("/getip", (req, res) => {
  dns.lookup("masaischool.com", { all: true }, (err, addresses) => {
    if (err) {
      res.status(500).json({ error: "DNS lookup failed" });
    } else {
      res.json({
        hostname: "masaischool.com",
        addresses: addresses // IPv4 + IPv6 (bonus)
      });
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
