import { Link } from 'react-router-dom';
import { Routes } from '@/libs/routes';

export const TheHeaderLogo = () => (
  <Link
    to={Routes.HOME}
    className='flex w-fit text-2xl'
  >
    <span className='text-n-0'>ToDo</span>
    <span className='text-n-6 transition-colors dark:text-n-5'>HQ</span>
  </Link>
);
