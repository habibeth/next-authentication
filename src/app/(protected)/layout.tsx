import Navbar from "./_components/navbar";

interface ProtectedLayout{
    children: React.ReactNode;
}

const ProtectedLayout = ({children}:ProtectedLayout) => {
    return (
        <div className="py-20 w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
            <Navbar />
            {children}
        </div>
    );
};

export default ProtectedLayout;