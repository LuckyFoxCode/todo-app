import { cn } from '@/libs/utils';
import { AsideUser } from './components';

interface AsideProps {
  className?: string;
}

export const Aside = ({ className }: AsideProps) => (
  <aside
    className={cn(
      'h-[420px] w-80 rounded-r-xl bg-rose-500 px-2 py-4',
      className,
    )}
  >
    <AsideUser />
  </aside>
);
