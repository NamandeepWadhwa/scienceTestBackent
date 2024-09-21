const prisma = require("./prismaInstance");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const user = require("./createUser");
require("dotenv").config();

app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/createUser", user);

// Check Prisma connection
async function startServer() {
  try {
    await prisma.$connect(); // Ensure the Prisma client connects to the database
    console.log("Connected to the database");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Prisma connection error:", error);
    process.exit(1); // Exit the process if connection fails
  }
}

startServer();
