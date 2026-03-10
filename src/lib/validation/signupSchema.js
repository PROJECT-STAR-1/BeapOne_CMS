import { z } from "zod"

export const signupSchema = z.object({
  firstName: z.string().min(2, "First name required"),
  lastName: z.string().min(2, "Last name required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number required"),

  organizationName: z.string().min(2, "Organization name required"),
  organizationType: z.string().min(1, "Select organization type"),
  jobTitle: z.string().min(2, "Job title required"),
  department: z.string().min(2, "Department required"),

  employees: z.string().optional(),
  country: z.string().min(2),

  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),

  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms" })
  }),

  ndpr: z.literal(true, {
    errorMap: () => ({ message: "NDPR consent required" })
  })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
})