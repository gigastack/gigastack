import { z } from "zod";

export const ContactSchema = z.object({
    name: z.string().min(3).max(20),
    email: z.string().min(3).max(20),
    message: z.string().min(3).max(20),
})

export type ContactType = z.infer<typeof ContactSchema>