import { CardWrapper } from "./card-wrapper";


export const LoginForm = () => {
    return (
        <CardWrapper
        headerLabel="Welcome Back!"
        backButtonLabel="Don't Have an Account"
        backButtonHref="/auth/register"
        showSocial
        >
            Login Form!
        </CardWrapper>
    );
};

