
const AuthLayout = ({children}: any) => {
    return (
        <div>
            <nav className="text-3xl text-center bg-orange-400">This Auth Navbar Layout with out auth prefix</nav>
            {children}
        </div>
    );
};

export default AuthLayout;