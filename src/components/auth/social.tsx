import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";


const Social = () => {
    return (
        <div className="flex items-center justify-center gap-x-4 w-full">
            <Button
                size={"lg"}
                variant={"outline"}
                className="w-full text-3xl"
                onClick={()=>{}}
            >
                <FcGoogle />
            </Button>
            <Button
                size={"lg"}
                variant={"outline"}
                className="w-full text-3xl"
                onClick={()=>{}}
            >
                <FaGithub />
            </Button>
        </div>
    );
};

export default Social;