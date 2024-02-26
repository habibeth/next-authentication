"use server"

import * as z from 'zod';
import bcrypt from "bcryptjs";
import { db } from '@/lib/db';
import { RegisterSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';


export const register = async (values: z.infer<typeof RegisterSchema>) => {
    console.log(values);
    const validateFields = RegisterSchema.safeParse(values);
    if (!validateFields.success) {
        return { error: "Invalid Fields!" }
    }
    const { email, password, name } = validateFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: "Email Already in use!" }
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        }
    });

    //TODO: Send verification token email

    return { success: "User Created Successfully!" }
};