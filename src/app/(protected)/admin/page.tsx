"use client"

import { admin } from "@/action/admin";
import { RoleGet } from "@/components/auth/role-get";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useCurrentRole } from "@/hook/use-current-role";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";

const AdminPage = () => {
    const onServerActionClick= async() =>{
        admin()
        .then(response=> {
            if(response.error){
                toast.error(response.error)
            }
            if(response.success){
                toast.success(response.success)
            }
        })
    }
    const handleAdminApiRoutes=()=>{
        fetch("/api/admin")
        .then(response=>{
            if(response.ok){
                toast.success("Allowed API Routes")
            }
            else{
                toast.error("Forbidden API Routes!")
            }
        })
    }
    return (
        <Card className="w-[600px]">
            <CardHeader className="text-2xl font-semibold text-center">
                🔑 Admin
            </CardHeader>
            <CardContent className="space-y-4">
                <RoleGet allowedRole={UserRole.ADMIN}>
                    <FormSuccess message="You Are allowed to see this content!" />
                </RoleGet>

                <div className="flex flex-row items-center justify-between p-3 border rounded-lg shadow-sm">
                    <p>
                        Admin Only API Routes
                    </p>
                    <Button onClick={handleAdminApiRoutes}>
                        Click to Test
                    </Button>
                </div>
                <div className="flex flex-row items-center justify-between p-3 border rounded-lg shadow-sm">
                    <p>
                        Admin Only Server Action
                    </p>
                    <Button onClick={onServerActionClick}>
                        Click to Test
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default AdminPage;