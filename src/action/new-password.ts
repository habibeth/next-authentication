"use server";
import * as z from 'zod'
import bcrypt from "bcryptjs";
import { NewPasswordSchema } from "@/schemas";
import { getPasswordResetTokenByToken } from '@/data/password-reset-token';
import { getUserByEmail } from '@/data/user';
import { db } from '@/lib/db';


export const newPassword = async (values: z.infer<typeof NewPasswordSchema>, token?: string | null) => {
    if (!token) {
        return { error: "Missing Token!" }
    }

    const validateFields = await NewPasswordSchema.safeParse(values);
    if (!validateFields.success) {
        return { error: "Invalid Fields" }
    }

    const { password } = validateFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);


    const existingToken = await getPasswordResetTokenByToken(token);
    if (!existingToken) {
        return { error: "Invalid Token" }
    }

    const hasExpired = new Date(existingToken.expires) < new Date();
    if (hasExpired) {
        return { error: "Token Was Expired!" }
    }

    const existingUser = await getUserByEmail(existingToken.email);
    if (!existingUser) {
        return { error: "User Does not exist" }
    }

    

    await db.user.update({
        where: { id: existingUser.id },
        data: {
            password: hashedPassword
        }
    })

    await db.passwordResetToken.delete({
        where: {id: existingToken.id}
    })

    return {success: "Your Password Changed Successfully!"}
}