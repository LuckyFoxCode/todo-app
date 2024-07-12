import { cn } from '@/libs/utils';
import { TheHeaderProps } from './TheHeader.types';
import { TheHeaderLogo } from './components';
import { SwitchTheme } from '../SwitchTheme';

export const TheHeader = ({ className }: TheHeaderProps) => (
  <header
    className={cn(
      'flex items-center justify-between px-10 py-4 shadow-md shadow-n-6/30 transition-all dark:shadow-n-6/50',
      className,
    )}
  >
    <TheHeaderLogo />
    <SwitchTheme />
  </header>
);
