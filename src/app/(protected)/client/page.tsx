"use client"

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hook/use-current-user";



const Server = () => {
    const user = useCurrentUser();
    return (
        <UserInfo
            label="📱 Server Components"
            user={user}
        ></UserInfo>
    );
};

export default Server;