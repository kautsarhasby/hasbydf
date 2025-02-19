import { Button } from "@/components/ui/button";
import { copyRightYear, dataSocial } from "@/lib/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto mb-10 md:mb-0 bottom-0 h-auto bg-black text-white p-4">
      <section className="h-full border-dashed border-white border-2 rounded-xl p-4">
        <div className="text-center font-oswald text-3xl pb-4">Hasby</div>
        <div className="flex gap-4 items-center justify-center">
          {dataSocial.map((social, i) => (
            <Button
              key={i.toString()}
              asChild
              size={"icon"}
              className="border-dashed border rounded-full p-2 hover:scale-105 transition-all"
            >
              <Link href={social.url} target="__blank">
                <social.logo size={50} />
              </Link>
            </Button>
          ))}
        </div>
      </section>
      <section className="text-center py-2">
        <span className="font-light">Copyright @ {copyRightYear} Hasby.</span>
      </section>
    </footer>
  );
}
