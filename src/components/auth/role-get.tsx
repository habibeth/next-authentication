"use client"

import { useCurrentRole } from "@/hook/use-current-role";
import { UserRole } from "@prisma/client";
import { FormError } from "@/components/form-error";


interface roleGatePerson {
    children: React.ReactNode;
    allowedRole: UserRole;
};


export const RoleGet= ({
    children,
    allowedRole
}: roleGatePerson)=>{
    const role = useCurrentRole();
    if(role !== allowedRole){
        return (
            <FormError message="You do not have Permission to view this Content!"></FormError>
        )
    }

    return(
        <>
            {children}
        </>
    )
}