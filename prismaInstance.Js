const { PrismaClient } = require("@prisma/client");

let prisma;

if (process.env.NODE_ENV === "production") {
  // In production, use a global instance
  prisma = new PrismaClient();
} else {
  // In development, store Prisma client in global to avoid new connections during hot-reload
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

module.exports = prisma;
