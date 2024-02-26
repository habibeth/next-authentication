"use client"

import {
    Card,
    CardContent,
    CardHeader,
    CardFooter
} from "@/components/ui/card";
import HeaderPage from "@/components/auth/header";
import Social from "@/components/auth/social";
import BackButton from "@/components/auth/back-button";


interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string,
    backButtonLabel: string,
    backButtonHref: string,
    showSocial?: boolean
}

export const CardWrapper = ({ children, headerLabel, backButtonLabel, backButtonHref, showSocial }: CardWrapperProps) => {
    return (
        <Card className="w-[500px] shadow-md">
            <CardHeader>
                <HeaderPage label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {
                showSocial && (
                <CardFooter> 
                    <Social />
                </CardFooter>
                )
            }

            <CardFooter>
                <BackButton href={backButtonHref} label={backButtonLabel} />
            </CardFooter>
        </Card>
    )
}