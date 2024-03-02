import { UserRole } from "@prisma/client";
import * as z from "zod";



export const SettingsSchema = z.object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string()),
    newPassword: z.optional(z.string().min(6)),
})

    .refine((data) => {
        if (data.password && !data.newPassword) {
            return false;
        }

        return true;
    },{
        message: "New Password is require!",
        path: ["newPassword"]
    })
    .refine((data) => {
        if (data.newPassword && !data.password) {
            return false
        }

        return true;
    },{
        message: "Password is require!",
        path: ["password"]
    })


export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
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
    password: z.string().min(1, {
        message: "Password is Required"
    }),
    code: z.optional(z.string())
});


export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is Required"
    }),
    password: z.string().min(6, {
        message: "Password Must be At Least 6 Digit"
    }),
    name: z.string().min(1, {
        message: "Name is Required"
    }),
});