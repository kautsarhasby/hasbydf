import { z } from "zod";

export const formSchema = z.object({
  fullname: z.string().min(4).max(50),
  email: z
    .string()
    .email({ message: "Please input the correct email" })
    .max(50)
    .min(10),
  message: z.string().min(10),
});
