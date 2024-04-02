import { z } from "zod"


export const loginSchema = z.object({
    name: z.string().min(1),
    password: z.string().min(1)
})

export type TLoginData = z.infer<typeof loginSchema>