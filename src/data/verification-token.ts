import { db } from "@/lib/db";

export const getVerificationTokenByEmail = async(
    token: string
)=>{
    try{
        const verificationToken = await db.verificationToken.findUnique({
            where: {token}
        })

        return verificationToken
    } catch{
        return null;
    }
}


export const getVerificationTokenByToken = async(
    email: string
)=>{
    try{
        const verificationToken = await db.verificationToken.findFirst({
            where: {email}
        })

        
        return verificationToken
    } catch{
        return null;
    }
}