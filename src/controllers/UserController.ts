import { NextFunction, Request, Response } from "express";
import { LoginSchema, RegisterSchema } from "../zodSchemas";
import { prisma } from "../util/prisma";
import { RegisterInput } from "../interfaces";

export class UserController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, name, password }: RegisterInput = req.body;
      if (!email || !name || !password) throw new Error("Missing Input Data!");

      //   Register validation
      RegisterSchema.parse({ email, name, password });

      //   Insert to database
      const data = await prisma.user.create({
        data: { email, name, password },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          password: false,
        },
      });

      res.status(201).json({ message: "Success Create User", data: data });
    } catch (error) {
      next(error);
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password }: RegisterInput = req.body;
      if (!email || !password) throw new Error("Missing Input Data!");

      //   Register validation
      LoginSchema.parse({ email, password });

      //   res.json({ message: "Success Create User", data: data });
    } catch (error) {
      next(error);
    }
  }
}
