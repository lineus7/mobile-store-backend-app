import { z } from "zod";

export const RegisterSchema = z.object({
  email: z.string().email("Email must be in email format"),
  name: z.string().min(4, "Name minimal 4 characters"),
  password: z.string().min(4, "Password minimal 4 characters"),
});
