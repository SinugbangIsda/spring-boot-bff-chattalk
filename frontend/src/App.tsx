import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './components/privateroute';
import lazyLoad from './utils/lazylLoad';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const Dashboard = lazyLoad(() => import('./pages/dashboard'));
const Login = lazyLoad(() => import('./pages/login'));
const Register = lazyLoad(() => import('./pages/register'));
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
    path: '/*',
    element: <Error404 />
  }
]);

const App = () => {
  return (
    <Provider store = { store }>
      <RouterProvider router = { router } />
    </Provider>
  )
};

export default App;
