import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().regex(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/gm, "Enter a valid phone number"),
  service: z.enum([
    "financial planning",
    "investment management",
    "retirement planning",
    "estate planning",
    "debt management",
    "insuarance solutions",
    "educational planning",
    "other",
  ]),
  message: z.string().min(10, "Enter a message"),
});

export type contactData = z.infer<typeof contactSchema>;
