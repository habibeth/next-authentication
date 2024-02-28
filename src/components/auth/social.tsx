import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";


const Social = () => {
    const onClick = (provider: "google" | "github")=>{
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT,
        })
    }
    return (
        <div className="flex items-center justify-center gap-x-4 w-full">
            <Button
                size={"lg"}
                variant={"outline"}
                className="w-full text-3xl"
                onClick={() => onClick("google")}
            >
                <FcGoogle />
            </Button>
            <Button
                size={"lg"}
                variant={"outline"}
                className="w-full text-3xl"
                onClick={() => onClick("github")}
            >
                <FaGithub />
            </Button>
        </div>
    );
};

export default Social;