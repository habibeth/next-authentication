import * as z from "zod";



export const NewPasswordSchema = z.object({
    password: z.string().min(6,{
        message: "Password Must Be 6 Character of Longer"
    }),
});


export const ResetSchema = z.object({
    email: z.string().email({
        message: "Email is Required"
    }),
});


export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is Required"
    }),
    password: z.string().min(1,{
        message: "Password is Required"
    })
});


export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is Required"
    }),
    password: z.string().min(6,{
        message: "Password Must be At Least 6 Digit"
    }),
    name: z.string().min(1,{
        message: "Name is Required"
    }),
});