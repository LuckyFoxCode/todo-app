import { createBrowserRouter } from 'react-router-dom';
import { Login, NotFound, Root } from '@/pages';
import { Routes } from '@/libs/routes';

const basename = import.meta.env.VITE_BASE_URL || '';

export const router = createBrowserRouter(
  [
    {
      path: Routes.HOME,
      element: <Root />,
      errorElement: <NotFound />,
      children: [],
    },
    {
      path: Routes.LOGIN,
      element: <Login />,
      errorElement: <NotFound />,
    },
  ],
  { basename },
);
