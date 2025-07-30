import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, "Nom requis"),
  email: z.string().email("Email invalide"),
  message: z.string().min(1, "Message requis"),
});
