"use client";
import { NavbarLink } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="w-full">
      <header
        className={cn(
          navbarScrolled ? "bg-black/50" : "bg-black",
          "fixed top-0 z-50 w-full transition-colors duration-300"
        )}
      >
        <nav className="w-full  text-white relative  backdrop-blur h-auto flex justify-between px-8 xl:px-28 py-4  shadow-md align-center">
          <Link href={"/"} className="flex gap-2 items-center">
            <h2 className=" font-bold md:text-2xl font-oswald uppercase">
              Hasby
            </h2>
          </Link>

          {/* Web Navbar */}
          <ul className="gap-2 text-xs items-center md:text-xl md:flex hidden">
            {NavbarLink.map((navi, i) => (
              <li className="px-2 " key={i.toString()}>
                <Link
                  href={navi.url}
                  className="flex  justify-center gap-2 items-center hover:underline"
                >
                  <navi.icon size={20} />
                  <span>{navi.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {/* MOBILE NAVBAR */}
      <section
        className={
          "w-full transition-all duration-500 fixed z-40 bottom-0 bg-black rounded-t-md border-t-2 block md:hidden"
        }
      >
        <ul className=" grid grid-cols-4  text-white divide-x-2 ">
          {NavbarLink.map((navi, i) => (
            <li
              className="px-2 text-sm items-center justify-center py-4  flex "
              key={i.toString()}
            >
              <Link
                href={navi.url}
                className="flex  justify-center gap-2 items-center hover:underline"
              >
                <navi.icon size={10} />
                <span>{navi.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
