import FormContact from "@/components/public/contact/form";
import { MailPlus } from "lucide-react";
import React from "react";

export const revalidate = 60;

export default function ContactPage() {
  return (
    <main className="h-screen bg-black flex items-center justify-center">
      <div className="container px-2 py-4 min-h-min border rounded-xl">
        <div className="mb-3 pl-4 text-white">
          <h1 className=" font-bold text-2xl">Contact Me</h1>
          <p className="font-extra-light">Contact me with your email freely </p>
        </div>
        <div className="md:grid md:grid-cols-2">
          <section className="h-full w-full md:flex items-center justify-center hidden">
            <MailPlus color="white" size={120} />
          </section>
          <section className="p-2">
            <FormContact />
          </section>
        </div>
      </div>
    </main>
  );
}
