import { z } from "zod"

export const createFoodSchema = z.object({
    name: z.string().min(1, { message:"não pode ser vazio" }),
    weight: z.coerce.number().min(1,{ message:"não pode ser vazio" }),
    side: z.string(),
    weight_side: z.coerce.number(),
    result: z.coerce.number().min(1,{ message:"não pode ser vazio" }),
    insta: z.string().optional(),
    hipoglycemic:z.coerce.boolean(),
    highlight: z.coerce.boolean()
})


export type TCreateFood = z.infer<typeof createFoodSchema>