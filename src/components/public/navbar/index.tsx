"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconMenu, IconTerminal } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navbarLink } from "./constant";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

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

          <div className="hidden md:flex items justify-center gap-10">
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

          {/* Mobile Navbar */}
          <div className="flex md:hidden items justify-center gap-10">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">
                  <IconMenu />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle className="font-jetbrains flex items-center text-center justify-center">
                    <IconTerminal className="text-[#00AAFF]" />
                    <h2 className=" md:text-xl font-bold">Hasby</h2>
                  </DrawerTitle>
                </DrawerHeader>

                <div className="gap-4 text-lg font-mono items-start px-4 flex flex-col">
                  {navbarLink.map((navi, i) => (
                    <Link
                      key={i.toString()}
                      href={navi.url}
                      className="inline-flex justify-center gap-2 items-center  transition-colors relative group"
                    >
                      <navi.icon className="text-[#00AAFF]" />
                      <span className="text-[#00AAFF]/50 ">./</span>
                      <span className="hover:text-[#00AAFF] text-muted-foreground">
                        {navi.title}
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#00AAFF] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </Link>
                  ))}
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button className="outline-[#00AAFF]/10 text-[#00AAFF] font-mono outline-[1px] outline text-lg bg-[#06070A] rounded-md hover:bg-[#00AAFF] hover:text-[#06070A] font-black transition-colors duration-300">
                      &gt; get_in_touch()
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </nav>
      </header>
    </main>
  );
}
