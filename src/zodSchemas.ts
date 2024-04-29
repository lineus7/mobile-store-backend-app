import { z } from "zod";

export const RegisterSchema = z.object({
  email: z
    .string({ message: "Email must be in string format" })
    .email("Email must be in email format"),
  name: z
    .string({ message: "Name must be in string format" })
    .min(4, "Name minimal 4 characters"),
  password: z
    .string({ message: "Password must be in string format" })
    .min(4, "Password minimal 4 characters"),
});

export const LoginSchema = z.object({
  email: z
    .string({ message: "Email must be in string format" })
    .email("Email must be in email format"),
  password: z
    .string({ message: "Password must be in string format" })
    .min(4, "Password minimal 4 characters"),
});
