import AuthLayout from '../../components/auth/authlayout';
import LoginForm from '../../components/auth/login/loginform';
import AuthCardFooter from '../../components/auth/authlayout/authcardfooter';

const Login = () => {
  return (
    <AuthLayout 
      heading = "Log in to your account"
      formComponent = {
        <LoginForm />
      }
      footer = {
        <AuthCardFooter 
          message = "Don't have an account?"
          navigateText = "Register"
          navigateLink = "/register"
        />
      }
    />
  )
}

export default Login;
