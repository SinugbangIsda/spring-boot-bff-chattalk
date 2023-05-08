import { HStack } from "@chakra-ui/react";
import AuthLayout from "../../components/auth/authlayout";
import AuthCardFooter from "../../components/auth/authlayout/authcardfooter";
import ForgotPasswordForm from "../../components/auth/forgotpassword/forgotpasswordform";
import { Link } from "react-router-dom";

const ForgotPassword = () => {

    return (
        <AuthLayout 
            heading = "Forgot Password"
            formComponent = { 
                <ForgotPasswordForm />
            }
            footer = { 
                <AuthCardFooter
                    navigateText = "Login"
                    navigateLink = "/login"
                    navigateBack = { true }
                />
            }
        />
    )
};

export default ForgotPassword;