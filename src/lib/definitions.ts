import { z } from "zod";
export interface Text {
  id: string
  createdAt: Date
  updatedAt: Date
  content: string
  author: string
  title: string
  sentences: Sentence[]
}

export interface Sentence {
  id: string
  createdAt: Date
  updatedAt: Date
  textId: string
  content: string
  length: number
  text: Text
}

export const SignupFormSchema = z.object({
  username: z.string().min(2, { message: "Name has to be at least 2 characters long" }).trim(),
  email: z.string().email({ message: "Please input a valid email" }),
  password: z.string().min(8, { message: "Password has to be more than 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Password has to contain at least one letter" })
    .regex(/[0-9]/, { message: "Password has to contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, { message: "Password has to contain at least one special character" })
    .trim()
})

export type FormState = | {
  errors?: {
    username?: string[],
    email?: string[],
    password?: string[]
  }, message?: string
} | undefined