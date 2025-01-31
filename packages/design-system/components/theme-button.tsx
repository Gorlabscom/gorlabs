'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    switch (theme) {
      case 'light':
        setTheme('dark');
        break;
      case 'dark':
        setTheme('light');
        break;
      default:
        break;
    }
  };

  const toggleTheme = () => {
    //@ts-ignore
    // biome-ignore lint/style/useBlockStatements: <explanation>
        if (!document.startViewTransition) switchTheme();

    //@ts-ignore
    document.startViewTransition(switchTheme);
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="default"
      className="rounded-full"
    >
      <MoonIcon className='dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0' />
      <SunIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
