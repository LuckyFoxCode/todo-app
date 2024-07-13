import { createBrowserRouter } from 'react-router-dom';
import { Root } from '@/pages';
import { Routes } from '@/libs/routes';

const basename = import.meta.env.VITE_BASE_URL || '';

export const router = createBrowserRouter(
  [
    {
      path: Routes.HOME,
      element: <Root />,
      errorElement: <div>Not Found Page</div>,
      children: [],
    },
  ],
  { basename },
);
