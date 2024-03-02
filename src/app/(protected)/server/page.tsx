import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/auth";


const Server = async () => {
    const user = await currentUser();
    return (
        <UserInfo
            label="💻 Server Components"
            user={user}
        ></UserInfo>
    );
};

export default Server;