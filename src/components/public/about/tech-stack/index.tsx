import { Laptop } from "lucide-react";
import { TechItems } from "./data";

const Tech = () => {
  return (
    <section className="items-center flex flex-col justify-center my-8  ">
      <h2 className="font-bold flex gap-2 items-center text-xl md:text-2xl ">
        <Laptop size={30} /> Tech Stack
      </h2>
      <div className=" bg-black border p-2 flex flex-wrap justify-center text-white transition-all shadow-lg rounded-lg h-auto">
        {TechItems.map((item, index) => {
          return (
            <section
              key={index}
              className="hover:outline-1 hover:outline rounded-lg  hover:outline-white w-20 h-20 flex flex-col justify-center items-center"
            >
              {item.icon}
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default Tech;
