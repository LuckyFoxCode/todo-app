import { LuLayoutDashboard, LuListTodo, LuSettings } from 'react-icons/lu';
import { Routes } from '@/libs/routes';
import { cn } from '@/libs/utils';
import { AsideNavItem } from './AsideNavItem';

interface AsideNavProps {
  className?: string;
}

const navLinks = [
  { id: 0, title: 'Dashboard', path: Routes.HOME, iconName: LuLayoutDashboard },
  { id: 1, title: 'Todos', path: Routes.TODOS, iconName: LuListTodo },
  {
    id: 2,
    title: 'Settings',
    path: Routes.SETTINGS,
    iconName: LuSettings,
  },
];

export const AsideNav = ({ className }: AsideNavProps) => (
  <nav className={cn('flex flex-1 flex-col overflow-y-auto', className)}>
    <ul className='flex flex-col gap-y-2'>
      {navLinks.map(({ id, ...link }) => (
        <AsideNavItem
          key={id}
          link={link}
        />
      ))}
    </ul>
  </nav>
);
