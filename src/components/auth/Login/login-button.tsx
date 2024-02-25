"use client"

import React from "react";
import { useRouter } from "next/navigation";

interface LoginButtonProps {
    children: React.ReactNode,
    mode?: "modal" | "redirect",
    asChild?: boolean,
}

const LoginButton = ({
    children,
    mode="redirect",
    asChild
}:LoginButtonProps) => {
    const router = useRouter();
    const handleLogin = () =>{
        router.push("/auth/login")
    }

    if(mode ==="modal"){
        return(
            <div className="">
                <span>Modal Coming Soon</span>
            </div>
        )
    }
    return (
        <div>
            <span onClick={handleLogin} className="cursor-pointer">
                {children}
            </span>
        </div>
    );
};

export default LoginButton;