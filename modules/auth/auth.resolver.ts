import {z} from 'zod'

export const formSchema = z.object({
  email: z.string().min(2).max(50),
  fullName: z.string().min(2).max(50),
})
