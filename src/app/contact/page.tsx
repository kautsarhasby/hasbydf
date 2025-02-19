import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
            <form action="" className="text-white">
              <div className="mb-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  className="bg-black"
                  placeholder="ex: yourmail@mail.com"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  className="bg-black"
                  placeholder="ex: John Doe"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  className="bg-black resize-none"
                  rows={10}
                  placeholder="ex: Hello i like...."
                />
              </div>
              <div className="w-full">
                <Button type="submit" className="w-full" variant={"secondary"}>
                  Submit
                </Button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
