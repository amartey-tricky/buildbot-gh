"use client";

import { Link } from "next-view-transitions";
import { CldImage } from "./cldimage";
import { rowdies } from "../app/fonts";
import menu from "../util/collections/menu.json";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="w-full h-auto backdrop-blur-sm">
      <div className="flex items-center justify-between sticky px-4 py-3 md:px-10 md:py-6">
        <div className="flex items-center gap-4">
          <Link href="/">
            <CldImage
              src="Logos/lsgf9lciieblf3jemxy5"
              alt="buildbot logo"
              width={50}
              height={50}
              crop={{ type: "auto" }}
              className="md:w-[70px] md:h-[70px]"
              priority
            />
          </Link>
          <span>
            <Link href="/" className={`${rowdies.className} text-2xl font-bold`}>
              BUILDBOT
            </Link>
          </span>
        </div>
        <nav className="lg:flex items-center justify-between gap-4 hidden">
          {menu.map((item) => (
            <Link key={item.name} href={item.url}>
              <span className="text-lg font-bold">{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className="flex lg:hidden items-center justify-end">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-orange-600 w-8 h-8 transition-all transform duration-300 ease-in-out"
          >
            {openMenu ? <X /> : <Menu />}
          </button>
        </div>
        <div className="hidden lg:flex items-center justify-center">
          <a
            href="/signup"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-md font-semibold text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
          >
            Sign Up
          </a>
        </div>
      </div>
      <nav
        className={
          openMenu
            ? "top-0 left-0 relative w-full md:w-[70%] z-50 flex flex-col gap-6 items-center justify-between p-6 md:p-10"
            : "hidden"
        }
      >
        {menu.map((item) => (
          <Link key={item.name} href={item.url}>
            <span className="text-lg font-bold">{item.name}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
