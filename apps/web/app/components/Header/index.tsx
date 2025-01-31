'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon, X } from 'lucide-react';
import { SiGithub, SiX } from 'react-icons/si';
import { Avatar } from '@repo/design-system/components/ui/avatar';
import { Badge } from '@repo/design-system/components/ui/badge';
import { Button } from '@repo/design-system/components/ui/button';
// import { Dialog, DialogRoot } from '@gorlabs/ui';
// import { SearchDocs } from './docs/search-docs';
import { useScrolled } from '@repo/design-system/hooks/use-scrolled';
import { cn } from '@repo/design-system/lib/utils';
import { focusRing } from '@repo/design-system/lib/styles/styles';
import { siteConfig } from '@/config/site';
import ThemeToggler from '@repo/design-system/components/theme-button';
import { env } from '@/env';


const navItems = [
  { id: 1, label: 'Pricing', href: '/#plans' },
  { id: 2, label: 'About', href: '/about' },
  // {
  //   id: 3,
  //   label: 'Documentation',
  //   href: `https://docs.${siteConfig.siteDomain}`,
  // },
];

if (env.NEXT_PUBLIC_DOCS_URL) {
  navItems.push({ id: 3, label: 'Docs', href: env.NEXT_PUBLIC_DOCS_URL });
}


export const Header = () => {
  const { scrolled } = useScrolled({ initial: false });
  const [isOpen, setOpen] = useState(false);

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
                scrolled && '-translate-x-2 pointer-events-none opacity-0'
              )}
              aria-hidden={scrolled}
            >
              <Avatar
                src={siteConfig.logo}
                alt={siteConfig.name}
                className="size-6 rounded-sm"
                imageProps={{
                  loading: 'lazy',
                  width: 24,
                  height: 24,
                }}
              />
              <div className="mt-1 whitespace-nowrap font-bold font-josephin leading-normal tracking-tighter">
                {siteConfig.ogName}
              </div>
              <Badge
                variant="default"
                size="sm"
                className="mb-4 inline-flex h-fit items-center rounded-md bg-blue-500/15 px-2 py-0.5 font-medium text-blue-700 text-sm italic opacity-100 hover:bg-blue-500/25 sm:text-xs dark:bg-blue-500/10 dark:text-blue-400 dark:hover:bg-blue-500/20 forced-colors:outline"
              >
                alpha
              </Badge>
            </Link>
          </div>
          <div
            className={cn(
              'relative flex items-center gap-6 overflow-hidden rounded-full bg-background-muted px-4 py-1 transition-[padding,background-color] duration-300 ease-out dark:bg-background-muted',
              scrolled &&
                'pointer-events-auto bg-zinc-800 pl-14 text-white shadow-md dark:bg-zinc-200 dark:text-zinc-900'
            )}
          >
            <Link
              href="/"
              className={cn(
                focusRing(),
                '-translate-x-14 pointer-events-none absolute rounded opacity-0 transition-[opacity,transform] duration-300 ease-out',
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
              <Link href={siteConfig.links.x} target="_blank">
                <SiX />
              </Link>
            </Button>
            <ThemeToggler />
            {/* <Button variant="outline" asChild>
              <Link href={`${env.NEXT_PUBLIC_APP_URL}/sign-in`}>Sign in</Link>
            </Button>
            <Button asChild>
              <Link href={`${env.NEXT_PUBLIC_APP_URL}/sign-up`}>
                Get started
              </Link>
            </Button> */}
          </div>
        </div>
        {/* Mobile nav */}
        <div className="flex items-center gap-4 md:hidden">
          <Link
            href="/"
            className={cn(
              focusRing(),
              'flex w-[130px] items-center space-x-2 rounded transition-opacity hover:opacity-80'
            )}
          >
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              loading="lazy"
              width={24}
              height={24}
            />
            <div className='mt-1 font-bold font-josephin leading-normal tracking-tighter'>
              {siteConfig.ogName}
            </div>
          </Link>
          <ThemeToggler />
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-14 right-0 left-0 border-t bg-background shadow-lg md:hidden">
            <nav className="container py-4">
              <Nav
                items={navItems}
                direction="col"
                onNavItemClick={() => setOpen(false)}
              />
              <div className="mt-4 flex flex-col gap-2">
                <Button variant="outline" asChild>
                  <Link href={`${env.NEXT_PUBLIC_APP_URL}/sign-in`}>
                    Sign in
                  </Link>
                </Button>
                <Button asChild>
                  <Link href={`${env.NEXT_PUBLIC_APP_URL}/sign-up`}>
                    Get started
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

interface NavItem {
  id: number | string;
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
        (item) =>
          item.href && (
            <Link
              key={item.id || item.href}
              className={cn(
                focusRing(),
                'flex items-center justify-center gap-2 rounded px-4 py-1 font-medium text-fg/60 text-sm transition-colors hover:text-fg',
                pathname.startsWith(item.href) &&
                  item.href !== '/' &&
                  'bg-background-inverse/10 text-fg',
                direction === 'col' && 'w-full py-2 text-md'
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
