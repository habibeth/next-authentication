import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: '2FA Authentication Mail',
        html: `<p>Your 2FA Verification Mail is Here ${token}</p>`
    });
}

export const sendPasswordResetEmail = async (
    email: string,
    token: string
) => {
    const resetLink = `${domain}/auth/new-password?token=${token}`;

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Confirm your Mail',
        html: `<p>Congrats on sending your Reset Password is <a href="${resetLink}">here!</a>!</p>`
    });
}

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`;


    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Confirm your Mail',
        html: `<p>Congrats on sending your verification <a href="${confirmLink}">here!</a>!</p>`
    });
}