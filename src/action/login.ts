"use server"
import { LoginSchema } from '@/schemas';
import * as z from 'zod'


export const login = async(values: z.infer<typeof LoginSchema>) => {
    console.log(values);
    const validateFields = LoginSchema.safeParse(values);
    if(!validateFields.success){
        return {error: "Invalid Fields!"}
    }
    return {success: "Email sent!"}
};