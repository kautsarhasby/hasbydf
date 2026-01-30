"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconTerminal } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navbarLink } from "./constant";

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
          navbarScrolled ? "bg-zinc-900/50" : "bg-zinc-950",
          "fixed top-0 z-50 w-full transition-colors duration-300",
        )}
      >
        <nav className="w-full  text-white relative  backdrop-blur h-auto flex justify-between px-8 xl:px-28 py-6  shadow-md align-center">
          <Link href={"/"} className="flex gap-2 items-center font-jetbrains">
            <IconTerminal className="text-[#00AAFF]" />
            <h2 className=" md:text-xl font-bold">Hasby</h2>
          </Link>

          {/* Web Navbar */}
          <div className="flex items justify-center gap-10">
            <div className="gap-10 text-xs font-mono items-center md:text-xl md:flex hidden">
              {navbarLink.map((navi, i) => (
                <Link
                  key={i.toString()}
                  href={navi.url}
                  className="inline-flex justify-center gap-2 items-center  transition-colors relative group"
                >
                  <span className="text-[#00AAFF]/50 ">./</span>
                  <span className="hover:text-[#00AAFF] text-muted-foreground">
                    {navi.title}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#00AAFF] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              ))}
            </div>
            <Button className="outline-[#00AAFF]/10 text-[#00AAFF] font-mono outline-[1px] outline text-lg bg-[#06070A] rounded-md hover:bg-[#00AAFF] hover:text-[#06070A] font-black transition-colors duration-300">
              &gt; get_in_touch()
            </Button>
          </div>
        </nav>
      </header>
      {/* MOBILE NAVBAR */}
      <section
        className={
          "w-full transition-all duration-500 fixed z-40 bottom-0 bg-black rounded-t-md border-t-2 block md:hidden"
        }
      >
        <ul className=" grid grid-cols-4  text-white divide-x-2 ">
          {navbarLink.map((navi, i) => (
            <li
              className="px-2 text-sm items-center justify-center py-4  flex "
              key={i.toString()}
            >
              <Link
                href={navi.url}
                className="flex  justify-center gap-2 items-center hover:underline"
              >
                <span>{navi.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
