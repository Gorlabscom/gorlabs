'use client';
import { useTheme } from 'next-themes';
import { Moon, Sun } from '@repo/ui/icons';
import { Button } from '@repo/ui/components/ui/button.tsx';
import { useEffect, useState } from 'react';

export function ThemeButton() {
  const { theme, systemTheme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted ? (
        <Button
          className="group rounded-lg p-2"
          variant="ghostNoHover"
          size="icon"
          title={
            currentTheme === "light"
              ? "Switch to dark mode"
              : "Switch to light mode"
          }
          onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
        >
          {currentTheme === 'light' && (

            <Moon className="h-[1.2rem] w-[1.2rem] transition-all dark:-rotate-90 dark:scale-0
            group-hover:scale-110 group-hover:fill-black dark:group-hover:fill-white" />
          )}
          {currentTheme === 'dark' && (

            <Sun className="h-[1.2rem] w-[1.2rem] transition-all dark:rotate-0 dark:scale-100
              group-hover:scale-110 group-hover:fill-black dark:group-hover:fill-white" />
          )}
        </Button>
      ) : null}

    </>
  );
}
