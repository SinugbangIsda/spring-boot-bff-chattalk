import React, { useState } from 'react';
import { ForgotPasswordUser } from '../../../interfaces';
import { FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';

const FORM_VALUES: ForgotPasswordUser = {
    emailAddress: ""
};

const ForgotPasswordForm = () => {
    const [ formValues, setFormValues ] = useState<ForgotPasswordUser>(FORM_VALUES);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formValues);
    };

    return (
        <form 
            onSubmit = {(e) => {
                handleSubmit(e);
            }}
        >
            <Stack>
                <FormControl>
                    <FormLabel>
                        Email Address
                    </FormLabel>
                    <Input 
                        id = "emailAddress"
                        type = "email"
                        placeholder = "name@company.com"
                        border = "1px"
                        borderColor = "#c4cfdc"
                        onChange = {(e) => {
                            setFormValues({
                                ...formValues,
                                emailAddress: e.target.value
                            });
                        }}
                        value = { formValues.emailAddress }
                    />
                </FormControl>
            </Stack>
        </form>
    )
};

export default ForgotPasswordForm;