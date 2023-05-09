import { Button, Checkbox, FormControl, FormLabel, IconButton, Input, InputGroup, InputRightElement, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { LoginUser } from "../../../interfaces";
import { Link } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/all";

const FORM_VALUES: LoginUser = {
    emailAddress: "",
    password: ""
};

const LoginForm = () => {
    const [ formValues, setFormValues ] = useState<LoginUser>(FORM_VALUES);
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
                <Stack 
                    spacing = { 10 }
                    w = "full"
                >
                    <Stack
                        direction = {{ base: 'column', sm: 'row' }}
                        align = "start"
                        justify = "space-between"
                        color = "black"
                        css = {{
                            "WebkitUserSelect": "none",
                            "msUserSelect": "none",
                            "userSelectg": "none",
                        }}
                    >
                        <Checkbox>
                            Remember me
                        </Checkbox>
                        <Link to = "/forgotpassword">
                            <Text 
                                color = "#3a82f7"
                                _hover = {{
                                    color: "#2a63c2"
                                }}
                            >
                            Forgot password?
                            </Text>
                        </Link>
                    </Stack>
                </Stack>
                <Button
                    w = "full"
                    bg = "#3a82f7"
                    color = "white"
                    _hover = {{
                        bg: "#2a63c2"
                    }}
                    type = "submit"
                >
                    Log In
                </Button>
            </VStack>
        </form>
    )
};

export default LoginForm;