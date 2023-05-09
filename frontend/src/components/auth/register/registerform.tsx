import { Button, FormControl, FormLabel, HStack, IconButton, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { RegisterUser } from "../../../interfaces";
import { IoMdEye, IoMdEyeOff } from "react-icons/all";

const FORM_VALUES: RegisterUser = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: ""
};

const RegisterForm = () => {
    const [ formValues, setFormValues ] = useState<RegisterUser>(FORM_VALUES);
    const [ showPassword, setShowPassword ] = useState<boolean>(false);
    
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
            <VStack spacing = { 4 }>
                <HStack>
                    <FormControl 
                        id = "firstName"
                        color = "black"
                        isRequired
                    >
                        <FormLabel>
                            First Name
                        </FormLabel>
                        <Input
                            autoComplete = "off"
                            type = "text"
                            placeholder = "John"
                            border = "1px"
                            borderColor = "#c4cfdc"
                            onChange = {(e) => {
                                setFormValues({
                                    ...formValues,
                                    firstName: e.target.value
                                });
                            }}
                            value = { formValues.firstName }
                        />
                    </FormControl>
                    <FormControl
                        id = "lastName"
                        color = "black"
                        isRequired
                    >
                        <FormLabel>
                            Last Name
                        </FormLabel>
                        <Input
                            autoComplete = "off"
                            type = "text"
                            placeholder = "Doe"
                            border = "1px"
                            borderColor = "#c4cfdc"
                            onChange = {(e) => {
                                setFormValues({
                                    ...formValues,
                                    lastName: e.target.value
                                });
                            }}
                            value = { formValues.lastName }
                        />
                    </FormControl>
                </HStack>
                <FormControl
                    id = "emailAddress"
                    color = "black"
                    isRequired
                >
                    <FormLabel>
                        Email Address
                    </FormLabel>
                    <Input 
                        autoComplete = "off"
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
                <FormControl
                    id = "password"
                    color = "black"
                    isRequired
                >
                    <FormLabel>
                        Password
                    </FormLabel>
                    <InputGroup>
                        <Input
                            autoComplete = "off"
                            pr = "4.5rem"
                            type = { showPassword ? "text" : "password" }
                            placeholder = "**********"
                            border = "1px"
                            borderColor = "#c4cfdc"
                            onChange = {(e) => {
                                setFormValues({
                                    ...formValues,
                                    password: e.target.value
                                });
                            }}
                            value = { formValues.password }
                        />
                        <InputRightElement width = "4.2rem">
                            <IconButton
                                aria-label = "Show Password"
                                h = "1.75rem"
                                size = "sm"
                                onClick = {() =>
                                    setShowPassword((showPassword) => !showPassword)
                                }
                            >
                                { showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                            </IconButton>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
                <Button
                    w = "full"
                    bg = "#3a82f7"
                    color = "white"
                    _hover = {{
                        bg: "#2a63c2"
                    }}
                    type = "submit"
                >
                    Register
                </Button>
            </VStack>
        </form>
    )
};

export default RegisterForm;