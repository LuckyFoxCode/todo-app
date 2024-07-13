import { LuLogOut } from 'react-icons/lu';
import { cn } from '@/libs/utils';
import { AsideNav, AsideUser } from './components';
import { Icon } from '../common';

interface AsideProps {
  className?: string;
}

export const Aside = ({ className }: AsideProps) => (
  <aside
    className={cn(
      'flex h-[calc(100vh-84px)] w-80 flex-col gap-y-4 rounded-r-xl bg-rose-500 px-2 py-4',
      className,
    )}
  >
    <AsideUser />
    <AsideNav />
    <button className='flex flex-shrink-0 items-center rounded-lg border-2 border-transparent p-4 text-lg text-light transition-all duration-300 hover:bg-slate-200 hover:text-n-0 focus:border-slate-200 focus:outline-none'>
      <Icon
        iconName={LuLogOut}
        size={20}
        className='mr-2'
      />
      LogOut
    </button>
  </aside>
);
