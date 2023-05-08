import AuthLayout from '../../components/auth/authlayout';
import RegisterForm from '../../components/auth/register/registerform';
import AuthCardFooter from '../../components/auth/authlayout/authcardfooter';

const Register = () => {
  return (
    <AuthLayout 
      heading = "Create an account"
      formComponent = {
        <RegisterForm />
      }
      footer = {
        <AuthCardFooter 
          message = "Already have an account?"
          navigateLink = "/login"
          navigateText = "Login"
        />
      }
    />
  )
}

export default Register;
