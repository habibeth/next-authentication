import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendPasswordResetEmail = async (
    email: string,
    token: string
) => {
    const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'habibdiu814@gmail.com',
        subject: 'Confirm your Mail',
        html: `<p>Congrats on sending your Reset Password is <a href="${resetLink}">here!</a>!</p>`
    });
}

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;


    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'habibdiu814@gmail.com',
        subject: 'Confirm your Mail',
        html: `<p>Congrats on sending your verification <a href="${confirmLink}">here!</a>!</p>`
    });
}