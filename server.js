const prisma = require("./prismaInstance");
const app = require("./index");
const http=require("http")
const PORT = process.env.PORT || 8080;
const setUpSocket=require("./socket")
// Check Prisma connection
async function startServer() {
  try {
    await prisma.$connect(); // Ensure the Prisma client connects to the database
    console.log("Connected to the database");

    const server=http.createServer(app);
    setUpSocket(server);

    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Prisma connection error:", error);
    process.exit(1); // Exit the process if connection fails
  }
}

startServer();
