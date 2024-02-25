import Link from "next/link";



const DashboardLayout = ({ children }:any) => {
    return (
        <div className="grid grid-cols-5">
            <div className="col-span-1 bg-red-800 text-white">
                <nav>
                    <ul className="menu">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/dashboard">Dashboard</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="col-span-4">
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;