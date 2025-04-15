import {z} from 'zod'

export const formSchema = z.object({
  fullName: z.string().min(2).max(50),
})
