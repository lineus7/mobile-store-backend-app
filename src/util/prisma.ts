import { PrismaClient } from "@prisma/client";
import { hashPassword } from "./hash";
export const prisma = new PrismaClient({ log: ["query"] }).$extends({
  query: {
    user: {
      // Pre-hooks for hashing password
      async create({ args, query }) {
        args.data.password = hashPassword(args.data.password);
        return query(args);
      },
    },
  },
});
