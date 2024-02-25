import * as z from "zod";



export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is Required"
    }),
    password: z.string().min(6,{
        message: "Password Must be At Least 6"
    })
});