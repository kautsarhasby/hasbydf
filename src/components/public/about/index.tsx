import Image from "next/image";
import React from "react";
import { FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Tech from "./tech-stack";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const About = () => {
  return (
    <main className="h-auto flex flex-col items-center my-8">
      <div className="h-full w-[95%] bg-black p-2 grid  xl:grid-cols-2 rounded-xl text-white  shadow-lg ">
        <section className="xl:h-full h-96  rounded-xl border-dashed border-4 flex flex-col  relative">
          <span className="uppercase text-white text-2xl md:text-5xl font-bold font-oswald -rotate-90 absolute right-0 top-20 xl:right-0 md:top-40">
            about me
          </span>
          <span className="uppercase text-white text-2xl md:text-5xl font-bold font-oswald rotate-90 absolute left-0  bottom-20 xl:left-0 md:bottom-40">
            about me
          </span>
          <section className="absolute right-10  bottom-5 md:bottom-20 md:right-40">
            <div className="md:w-[15rem] md:h-[15rem] w-[10rem] h-[10rem] relative overflow-hidden rounded-xl">
              <Image
                src="/images/kautsar-1.jpg"
                alt="profile-photo"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "0 0",
                  transform: "scale(2)",
                }}
                className="rounded-md md:w-48"
              />
            </div>
          </section>
          <section className="absolute left-10 top-5 md:left-40 md:top-20">
            <div className="md:w-[15rem] md:h-[15rem] w-[10rem] h-[10rem] relative overflow-hidden rounded-xl ">
              <Image
                src="/images/kautsar-2.jpg"
                alt="profile-photo"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "-50% 0",
                  transform: "scale(2)",
                }}
                className="rounded-md md:w-48"
              />
            </div>
          </section>
        </section>
        <div className="flex flex-col flex-wrap p-2 flex-1">
          <section className="flex-1">
            <h2 className="font-bold text-3xl uppercase font-oswald">
              Kautsar Hasby Dastien Fredila
            </h2>
            <p className="text-sm md:text-xl text-wrap font-thin  mb-3">
              Kautsar Hasby Dastien Fredila is my fullname, student and a
              self-taught developer maybe a suit condition for myself.
              <br />I mostly work on frontend using React/NextJs, and learning
              every frontend aspect. Frontend is my passion, but sometimes i
              work on the backend , mostly using PHP and its framework.
              <br />I love to design something which is my another passion,
              it&apos;s because i love to draw something and making some art
              sometimes doing design.
            </p>
            <ul className="mb-3 text-sm md:text-lg">
              <li>
                Born : <span className="font-bold "> 2 January 2004</span>
              </li>
              <li>
                Address : <span className="font-bold "> Jl. Merdeka Bogor</span>
              </li>
              <li>
                Last Education :{" "}
                <span className="font-bold ">Senior High School</span>
              </li>
              <li>
                Current Education :{" "}
                <span className="font-bold ">Gunadarma University</span>
              </li>
            </ul>
            <div className="flex gap-2">
              <Button
                className="font-bold flex items-center gap-2  p-2 rounded-lg"
                variant={"secondary"}
              >
                <FileText />
                Resume
              </Button>
              <Button
                className=" font-bold flex items-center gap-2  p-2 rounded-lg"
                variant={"secondary"}
                asChild
              >
                <Link href={"https://www.linkedin.com/in/kautsarhasby/"}>
                  <FaLinkedin />
                  Linkedin
                </Link>
              </Button>
              <Button
                className="font-bold flex items-center gap-2  p-2 rounded-lg"
                variant={"secondary"}
              >
                <FaGithub />
                GitHub
              </Button>
            </div>
            <Tech />
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;
