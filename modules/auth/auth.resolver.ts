import {z} from 'zod'

export const formSignUpSchema = z.object({
  email: z.string().email({message: 'Invalid email address'}),
  fullName: z.string().min(1, {message: 'The field is required'}).min(2).max(50),
})

export const formSignInSchema = z.object({
  email: z.string().email(),
  fullName: z.string().optional(),
})
