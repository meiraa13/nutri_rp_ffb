import { z } from "zod"

export const createFoodSchema = z.object({
    name: z.string(),
    weight: z.string(),
    side: z.string().optional(),
    weight_side: z.string().optional(),
    result: z.string(),
    insta: z.string().optional(),
    hipoglycemic:z.string(),
    highlight: z.string()
})

export type TCreateFood = z.infer<typeof createFoodSchema>