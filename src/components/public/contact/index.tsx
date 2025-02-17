import { Mail, Send, User } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-black flex flex-col justify-center h-screen items-center">
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center w-[90%] h-full">
        <section className="bg-white w-1/2 h-1/2 rounded-lg shadow-lg shadow-white p-2">
          <form action="" className="p-2 w-full" method="POST">
            <section className="relative w-full ">
              <User className="absolute top-2 left-2 text-slate-300" />
              <input
                type="text"
                className="w-full p-2 px-10 rounded-md mb-3 outline-1 outline outline-slate-300"
                placeholder="Your Name"
              />
            </section>
            <section className="relative w-full ">
              <Mail className="absolute top-2 left-2 text-slate-300" />
              <input
                type="email"
                className="w-full p-2 px-10 rounded-md mb-3 outline-1 outline outline-slate-300"
                placeholder="Your Email"
              />
            </section>
            <textarea
              className="w-full p-2 outline-1 mb-3 outline outline-slate-300 rounded-md"
              placeholder="Your Message"
              maxLength={250}
            ></textarea>
            <button className="text-white bg-black rounded-lg p-2 flex gap-2">
              Send Message
              <Send />
            </button>
          </form>
        </section>
        <section className="text-white justify-center w-1/2 h-1/2 flex flex-col items-start">
          <h2 className="uppercase text-3xl font-bold">CONTACT ME</h2>
          <p className="max-w-lg text-xl">
            You can send me a suggestion or a critics to make me a better
            person, your feedback is very valuable to me.
          </p>
        </section>
      </div>
    </section>
  );
}
