import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';
import { Icon } from '@/components/common';
import { cn } from '@/libs/utils';

interface AsideNavItemProps {
  link: {
    title: string;
    path: string;
    iconName: IconType;
  };
}

export const AsideNavItem = ({ link }: AsideNavItemProps) => (
  <li>
    <NavLink
      to={link.path}
      className={({ isActive }) =>
        cn(
          'flex items-center rounded-lg border-2 border-transparent p-4 text-lg text-light transition-all duration-300 hover:bg-slate-200 hover:text-n-0 focus:border-slate-200 focus:outline-none',
          isActive && 'bg-light text-n-0',
        )
      }
    >
      <Icon
        iconName={link.iconName}
        size={20}
      />
      <span className='ml-2'>{link.title}</span>
    </NavLink>
  </li>
);
