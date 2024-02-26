import { Button } from "@/components/ui/button";
import Link from "next/link";


interface backButton {
    href: string,
    label: string,
}

const BackButton = ({
    href,
    label
}:backButton) => {
    return (
        <Button
        variant={'link'}
        size={'sm'}
        className="font-normal w-full"
        asChild
        >
            <Link href={href}>
                {label}
            </Link>
        </Button>
    );
};

export default BackButton;