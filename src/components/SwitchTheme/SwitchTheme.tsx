import { useEffect, useState } from 'react';
import { PiSun, PiMoon } from 'react-icons/pi';
import { cn } from '@/libs/utils';
import { SwitchThemeProps } from './SwitchTheme.types';
import { Icon } from '../common';

export const SwitchTheme = ({ className, ...rest }: SwitchThemeProps) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'flex w-fit items-center justify-center rounded-md border p-1 text-n-0 transition-all hover:text-n-6 focus:border-n-6 focus:outline-none',
        className,
      )}
      {...rest}
    >
      <Icon
        size={18}
        iconName={theme === 'light' ? PiSun : PiMoon}
      />
    </button>
  );
};
