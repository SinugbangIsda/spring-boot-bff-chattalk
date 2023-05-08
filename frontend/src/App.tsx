import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './components/privateroute';
import lazyLoad from './utils/lazyLoad';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ChakraProvider } from '@chakra-ui/react';

const Dashboard = lazyLoad(() => import('./pages/dashboard'));
const Login = lazyLoad(() => import('./pages/login'));
const Register = lazyLoad(() => import('./pages/register'));
const ForgotPassword = lazyLoad(() => import('./pages/forgotpassword'));
const Error404 = lazyLoad(() => import('./pages/error404'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoute />,
    children: [
      {
        path: '',
        element: <Dashboard />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/forgotpassword',
    element: <ForgotPassword />
  },
  {
    path: '/*',
    element: <Error404 />
  }
]);

const App = () => {
  return (
    <Provider store = { store }>
      <ChakraProvider>
        <RouterProvider router = { router } />
      </ChakraProvider>
    </Provider>
  )
};

export default App;
