import { Button } from "@/components/ui/button";
import { copyRightYear, footerSocialLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { IconTerminal } from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto mb-10 md:mb-0 bottom-0 h-auto border-t-[1px] border-[#00AAFF]/10">
      <section className="h-full border-white pt-4  rounded-xl ">
        <div className="grid place-items-center font-jetbrains font-bold text-3xl mb-4 ">
          <h2 className="flex mx-auto items-center">
            <IconTerminal className="text-[#00AAFF]" size={36} />
            <span className="text-white">Hasby</span>
          </h2>
        </div>
        <div className="gap-4  flex items-center justify-center mb-4">
          <div className="flex gap-4">
            {footerSocialLinks.map(({ name, href, icon: Icon }, i) => (
              <Button key={i.toString()} asChild>
                <Link
                  href={href}
                  target={name !== "Email" ? "_blank" : undefined}
                  rel={name !== "Email" ? "noopener noreferrer" : undefined}
                  className={cn(
                    "bg-zinc-900",
                    "hover:shadow-[#00AAFF]/50 hover:shadow-[0_0px_24px_rgba(0,0,0,0.25)]",
                    " w-14 h-14 p-3 rounded-xl border border-muted-foreground transition-all duration-300 group-hover:bg-[#00AAFF] ",
                    "group-hover:text-zinc-900 group-hover:border-[#00AAFF]  group",
                  )}
                  aria-label={name}
                >
                  <Icon
                    className="text-muted-foreground group-hover:text-[#00AAFF] transition-colors "
                    size={36}
                  />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </section>
      <section className="text-center py-2">
        <span className="font-mono text-muted-foreground">
          @ {copyRightYear} | Hasby.
        </span>
      </section>
    </footer>
  );
}
