"use server"
import { currentUser } from "@/lib/auth"
import bcrypt from "bcryptjs"
import { SettingsSchema } from "@/schemas"
import { getUserByEmail, getUserById } from "@/data/user"
import * as z from "zod"
import { db } from "@/lib/db"
import { generateVerificationToken } from "@/lib/tokens"
import { sendVerificationEmail } from "@/lib/mail"
import { unstable_update } from "@/auth"
// import { update } from "@/auth"

export const settings = async (
    values: z.infer<typeof SettingsSchema>
) => {
    const user = await currentUser();

    if (!user) {
        return { error: "Unauthorized" }
    }

    const dbUser = await getUserById(user?.id)

    if (!dbUser) {
        return { error: "Unauthorized" }
    }

    if (user.isOAuth) {
        values.email = undefined;
        values.password = undefined;
        values.newPassword = undefined;
        values.isTwoFactorEnabled = undefined;
    }

    if (values.email && values.email !== user.email) {
        const existingUser = await getUserByEmail(values.email);

        if (existingUser && existingUser.id !== user.id) {
            return { error: "Email Already in User" }
        }

        const verificationToken = await generateVerificationToken(values.email);

        await sendVerificationEmail(
            verificationToken.email,
            verificationToken.token,
        )

        // return {success: "Verification Email was Sent!"}

    }

    if (values.password && values.newPassword && dbUser.password) {
        const passwordMatch = await bcrypt.compare(
            values.password,
            dbUser.password,
        );
        if (!passwordMatch) {
            return { error: "Incorrect Current Password!" }
        }

        const hasPassword = await bcrypt.hash(values.newPassword, 10);
        values.password = hasPassword;
        values.newPassword = undefined;

    }

    const updatedUser = await db.user.update({
        where: { id: dbUser.id },
        data: {
            ...values
        }
    })

    unstable_update(
        {
            user: {
                name: updatedUser.name,
                email: updatedUser.email,
                isTwoFactorEnabled: updatedUser.isTwoFactorEnabled,
                role: updatedUser.role,
            }
        }
    )

    // update({
    //     user: {
    //         name: updatedUser.name,
    //         email: updatedUser.email,
    //         isTwoFactorEnabled: updatedUser.isTwoFactorEnabled,
    //         role: updatedUser.role,
    //     }
    // })

    return { success: "Settings Updated!" }
}