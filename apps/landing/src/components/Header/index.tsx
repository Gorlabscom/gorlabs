'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon } from 'lucide-react';
import { SiGithub, SiX } from 'react-icons/si';
import { Avatar } from '@gorlabs/ui';
import { Badge } from '@gorlabs/ui';
import { Button } from '@gorlabs/ui';
// import { Dialog, DialogRoot } from '@gorlabs/ui';
// import { SearchDocs } from './docs/search-docs';
import { useScrolled } from '@gorlabs/hooks';
import { cn } from '@gorlabs/utils';
import { focusRing } from '@gorlabs/utils';
import { siteConfig } from '@/config/site';
import ThemeToggler from '@/themes/theme-button';

export const Header = () => {
  const { scrolled } = useScrolled({ initial: false });

  return (
    <header
      className={cn(
        'sticky top-0 z-50 flex h-14 rounded-md max-md:border-b max-md:bg-background md:h-16',
        scrolled && 'pointer-events-none'
      )}
    >
      <div className="container flex h-full max-w-screen-2xl items-center">
        {/* Desktop Nav */}
        <div className="hidden w-full items-center justify-between md:flex">
          <div className="w-[130px]">
            <Link
              href="/"
              className={cn(
                focusRing(),
                'flex items-center space-x-2 rounded opacity-100 transition-[opacity,transform] duration-300 ease-out',
                scrolled && 'pointer-events-none -translate-x-2 opacity-0'
              )}
              aria-hidden={scrolled}
            >
              <Avatar
                src={siteConfig.logo}
                alt={siteConfig.name}
                loading="lazy"
                width={24}
                height={24}
                className="size-6 rounded-sm"
              />
              <div className="mt-1 font-josephin whitespace-nowrap font-bold leading-normal tracking-tighter">
                {siteConfig.ogName}
              </div>
              <Badge
                variant="default"
                size="sm"
                className="forced-colors:outline inline-flex items-center px-2 py-0.5 rounded-md font-medium text-sm sm:text-xs h-fit bg-blue-500/15 text-blue-700 hover:bg-blue-500/25 dark:bg-blue-500/10 dark:text-blue-400 dark:hover:bg-blue-500/20 italic mb-4 opacity-100"
              >
                alpha
              </Badge>
            </Link>
          </div>
          <div
            className={cn(
              'relative flex items-center gap-6 overflow-hidden rounded-full bg-background-muted dark:bg-background-muted px-4 py-1 transition-[padding,background-color] duration-300 ease-out',
              scrolled &&
                'pointer-events-auto bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-900 pl-14 shadow-md'
            )}
          >
            <Link
              href="/"
              className={cn(
                focusRing(),
                'pointer-events-none absolute -translate-x-14 rounded opacity-0 transition-[opacity,transform] duration-300 ease-out',
                scrolled && '-translate-x-10 opacity-100'
              )}
              aria-hidden={!scrolled}
              tabIndex={scrolled ? undefined : -1}
            >
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                width={20}
                height={20}
              />
            </Link>
            <Nav items={navItems} />
          </div>
          <div
            className={cn(
              'flex w-[130px] items-center justify-end space-x-2 opacity-100 transition-[opacity,transform] duration-300 ease-out',
              scrolled && 'pointer-events-none translate-x-2 opacity-0'
            )}
            aria-hidden={scrolled}
            tabIndex={scrolled ? -1 : undefined}
          >
            <Button
              size="sm"
              shape="square"
              variant="quiet"
              aria-label="github"
              asChild
            >
              <Link href={siteConfig.links.github} target="_blank">
                <SiGithub />
              </Link>
            </Button>
            <Button
              size="sm"
              shape="square"
              variant="quiet"
              aria-label="twitter"
              asChild
            >
              <Link href={siteConfig.links.twitter} target="_blank">
                <SiX />
              </Link>
            </Button>
            <ThemeToggler />
          </div>
        </div>
        {/* Mobile nav */}
        <div className="flex w-full items-center gap-4 md:hidden">
          <Link
            href="/"
            className={cn(
              focusRing(),
              'flex w-[130px] items-center  space-x-2 rounded transition-opacity hover:opacity-80'
            )}
          >
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              loading="lazy"
              width={24}
              height={24}
            />
            <div className="mt-1 font-josephin font-bold leading-normal tracking-tighter">
              {siteConfig.ogName}
            </div>
          </Link>
          {/* <SearchDocs className="flex-1" size="sm">
            <span className="mr-4 flex-1 text-left">Search...</span>
          </SearchDocs> */}

          {/* <DialogRoot>
            <Button
              variant="quiet"
              size="sm"
              shape="square"
              aria-label="Open menu"
            >
              <MenuIcon />
            </Button>
            <Dialog type="drawer">
              {({ close }) => (
                <Nav
                  direction="col"
                  items={[{ label: 'Home', href: '/' }, ...navItems]}
                  onNavItemClick={close}
                />
              )}
            </Dialog>
          </DialogRoot> */}

          {/* TODO: uncomment this to enable menu */}
          {/* <Button
            variant="quiet"
            size="sm"
            shape="square"
            aria-label="Open menu"
          >
            <MenuIcon />
          </Button> */}
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
};

// bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-900

interface NavItem {
  label: string;
  href?: string;
}

interface NavProps {
  items: NavItem[];
  direction?: 'col' | 'row';
  onNavItemClick?: () => void;
}

const Nav = (props: NavProps) => {
  const { items, direction = 'row', onNavItemClick } = props;
  const pathname = usePathname();

  return (
    <nav
      className={cn('flex items-center gap-0 sm:gap-2', {
        'flex-col gap-2': direction === 'col',
      })}
    >
      {items.map(
        (item, index) =>
          item.href && (
            <Link
              key={index}
              className={cn(
                focusRing(),
                'flex items-center justify-center gap-2 rounded px-4 py-1 text-sm font-medium text-fg/60 transition-colors hover:text-fg',
                pathname.startsWith(item.href) &&
                  item.href !== '/' &&
                  'bg-background-inverse/10 text-fg',
                direction === 'col' && 'text-md w-full py-2'
              )}
              href={item.href}
              onClick={onNavItemClick}
            >
              {item.href === '/' && (
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.name}
                  loading="lazy"
                  width={24}
                  height={24}
                />
              )}
              <span>{item.label}</span>
            </Link>
          )
      )}
    </nav>
  );
};

const navItems = [
  { label: 'Pricing', href: '/#plans' },
  { label: 'About', href: '/about' },
  { label: 'Documentation', href: `https://docs.${siteConfig.siteDomain}` },
];
