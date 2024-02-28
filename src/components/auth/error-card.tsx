import HeaderPage from '@/components/auth/header';
import BackButton from '@/components/auth/back-button';
import {
    Card,
    CardHeader,
    CardFooter
} from '@/components/ui/card'
import { CardWrapper } from './card-wrapper';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

const ErrorCard = () => {
    return (
        <CardWrapper headerLabel='Oops! Something went to wrong!' backButtonLabel='Back to Login' backButtonHref='/auth/login' >
            <div className="w-full flex items-center justify-center font-5xl">
                <ExclamationTriangleIcon className='text-destructive' />
            </div>
        </CardWrapper>
    );
};

export default ErrorCard;