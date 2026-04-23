"use client";
import React from "react";
import { IconMail, IconSend, IconTerminal } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      className="w-full py-24 justify-center flex overflow-hidden"
      id="contact"
    >
      <div className="container max-w-4xl px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-3 mb-2">
            <IconTerminal className="w-5 h-5 text-[#00AAFF]" />
            <p className="font-mono text-[#00AAFF] text-sm tracking-wider">
              <span className="text-muted-foreground">$</span> send --mail
              ./message.txt
            </p>
          </div>

          <h2 className="font-bold font-mono text-xl md:text-3xl text-center">
            <span className="text-muted-foreground">&lt;</span>
            <span className="neon-text">Connect_With_Me</span>
            <span className="text-muted-foreground">/&gt;</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-[#00AAFF]/20 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          <div className="relative border-[#00AAFF]/30 border-2 rounded-2xl bg-zinc-950 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/50 border-b border-[#00AAFF]/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500/80 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500/80 rounded-full" />
                <div className="w-3 h-3 bg-green-500/80 rounded-full" />
              </div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                Message_Editor.exe
              </span>
              <IconMail className="w-4 h-4 text-[#00AAFF]/50" />
            </div>

            <div className="p-6 md:p-10">
              <form
                action="https://formspree.io/f/YOUR_FORMSPREE_ID"
                method="POST"
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="font-mono text-xs text-[#00AAFF] uppercase tracking-tighter before:content-['//_']"
                  >
                    Your_Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name..."
                    className="bg-black/50 border-[#00AAFF]/20 text-white font-mono focus-visible:ring-[#00AAFF]/50 focus-visible:border-[#00AAFF]"
                  />
                </div>

                {/* Input Email */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="font-mono text-xs text-[#00AAFF] uppercase tracking-tighter before:content-['//_']"
                  >
                    Email_Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="bg-black/50 border-[#00AAFF]/20 text-white font-mono focus-visible:ring-[#00AAFF]/50 focus-visible:border-[#00AAFF]"
                  />
                </div>

                {/* Input Message */}
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="font-mono text-xs text-[#00AAFF] uppercase tracking-tighter before:content-['//_']"
                  >
                    Write_Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Hello I want to collaborate..."
                    className="bg-black/50 border-[#00AAFF]/20 text-white font-mono focus-visible:ring-[#00AAFF]/50 focus-visible:border-[#00AAFF] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full py-4 bg-[#00AAFF]/10 border border-[#00AAFF]/50 rounded-xl font-mono text-[#00AAFF] hover:bg-[#00AAFF] hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <IconSend className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <span>Execute_Send()</span>
                </button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Footer Info */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="font-mono text-zinc-500 text-[10px] text-center max-w-xs uppercase tracking-[0.2em] before:content-['//_']">
            Available for freelance work and collaboration
          </p>
          <div className="flex gap-6 text-[#00AAFF]/60 font-mono text-xs">
            <Link
              href="mailto:your@email.com"
              className="hover:text-[#00AAFF] transition-colors"
            >
              EMAIL
            </Link>
            <Link href="#" className="hover:text-[#00AAFF] transition-colors">
              LINKEDIN
            </Link>
            <Link href="#" className="hover:text-[#00AAFF] transition-colors">
              GITHUB
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
