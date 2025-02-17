import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaReact } from "react-icons/fa6";

export default function Hero() {
  return (
    <main className="bg-black relative h-screen w-full flex justify-end items-center">
      <h1 className="font-bold text-white text-[6rem] md:text-[8rem] uppercase  absolute font-oswald top-10 left-10">
        hasby
      </h1>
      <div className="font-bold text-white text-5xl grid  absolute font-oswald bottom-10  left-10">
        <span>Self-taught.</span>
        <span>Informatics Student.</span>
        <span>Fullstack Enthusiast.</span>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        <FaReact size={160} className="animate-spin-slow w-20 md:w-[24rem]  " />
      </div>
      <section className="p-4 md:pl-10 flex flex-col md:w-[38rem] w-auto absolute left-2 top-40 md:top-52">
        <span className="text-white text-sm  md:text-xl font-thin pb-4">
          My will to work exceeds my body&apos;s capability, but I will keep
          pushing forward. No obstacle is too great, no challenge is too
          difficult. Never give up, never surrender
        </span>
        <Button
          variant={"secondary"}
          size={"lg"}
          className="font-extrabold uppercase rounded-full"
        >
          Get in touch with me
        </Button>
      </section>
      <section className=" flex-col  h-[48rem] w-[40rem] rounded-xl mx-8 relative hidden xl:flex">
        <Image
          src="/images/ryunosuke.jpg"
          alt="Ryunosuke"
          priority
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg mb-3 "
        />
      </section>
    </main>
  );
}
