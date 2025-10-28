// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default prisma;


// lib/prisma.ts  (or wherever you keep your Prisma client)
import { PrismaClient } from "@prisma/client";

// Prevent multiple PrismaClient instances in dev (Next.js hot reload)
const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    // Optional: enable logs during development
    // log: ["query", "error", "warn"],
  });

// In dev, reuse the client instead of creating new ones on every reload
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
