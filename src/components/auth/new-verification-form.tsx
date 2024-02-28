"use client"

import { NewVerificationAction } from "@/action/new-verification";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners"
import { FormSuccess } from "../form-success";
import { FormError } from "../form-error";

const NewVerificationForm = () => {
    const [error, setError] = useState<string | undefined>()
    const [success, setSuccess] = useState<string | undefined>()
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const onSubmit = useCallback(() => {
        if (!token) {
            setError("Missing Token!");
            return;
        }
        NewVerificationAction(token)
            .then(data => {
                setSuccess(data.success)
                setError(data.error)
            })
            .catch(() => {
                setError("Something went to Wrong!")
            })
    }, [token])

    useEffect(() => {
        onSubmit()
    }, [onSubmit])
    return (
        <CardWrapper
            headerLabel="Confirming your mail Verification!"
            backButtonLabel="Back to Login"
            backButtonHref="/auth/login"
        >
            <div className="flex flex-col justify-center items-center w-full">
                {!error && !success && <BeatLoader />}
                <div className="mt-5">
                    <FormSuccess message={success} />
                    <FormError message={error} />
                </div>
            </div>
        </CardWrapper>
    );
};

export default NewVerificationForm;