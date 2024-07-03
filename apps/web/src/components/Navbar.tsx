"use client";

import { Menu, X } from "@repo/ui/icons";
import { useState } from 'react';
import Image from 'next/image';
import logo from '@repo/ui/assets/logo.svg';
import { navItems } from '@/constants/navbar';
import { ThemeButton } from "@repo/ui/themes/theme-button";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="justify-center top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <aside className="flex items-center gap-2">
              <Image
                src={logo}
                width={40}
                height={40}
                alt="logo"
              />
              <span className="text-xl font-bold">Gorlabs.</span>
            </aside>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, navbar) => (
              <li key={navbar}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <aside >
            <ThemeButton />
          </aside>
          <div className="lg:hidden flex flex-col justify-end">
            <button onClick={toggleNavbar} className="p-2">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed inset-0 z-20 bg-neutral-900 bg-opacity-90 backdrop-blur w-full h-full flex flex-col justify-center items-center lg:hidden">
            <ul className="text-center">
              {navItems.map((item, navbar) => (
                <li key={navbar} className="py-4">
                  <a href={item.href} onClick={toggleNavbar} className="text-white text-lg">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
