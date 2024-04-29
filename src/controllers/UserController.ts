import { Request, Response } from "express";
import { RegisterSchema } from "../zodSchemas";
import { prisma } from "../util/prisma";
import { RegisterInput } from "../interfaces";
import { date } from "zod";

export class UserController {
  static async register(req: Request, res: Response) {
    try {
      const registerInput: RegisterInput = {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
      };

      //   Register validation
      RegisterSchema.parse(registerInput);

      //   Insert to database
      const data = await prisma.user.create({
        data: {
          email: registerInput.email,
          name: registerInput.name,
          password: registerInput.password,
        },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          password: false,
        },
      });

      res.json({ message: "Success Create User", data: data });
    } catch (error) {
      console.log(error);
      res.send("Error");
    }
  }
}
