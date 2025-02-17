import Marquee from "react-fast-marquee";

export default function Quotes() {
  return (
    <section className="md:flex items-center justify-center my-3 hidden">
      <Marquee
        play
        direction="left"
        speed={50}
        pauseOnHover
        className="bg-black text-white text-center w-full p-2 text-2xl"
      >
        <span className="italic">
          &quot;The Journey always goes, but it isn&apos;t easy. it always
          wrapped up with struggles and suprises &quot;
        </span>
        <span className="font-bold "> - Hasir Ali</span>
      </Marquee>
    </section>
  );
}
