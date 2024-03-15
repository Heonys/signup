import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import ProfilePage from '../pages/ProfilePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: '/signup', element: <SignupPage /> },
      { path: '/profile', element: <ProfilePage /> },
      { path: '/error/:type', element: <ErrorPage /> },
    ],
  },
]);

export default router;
