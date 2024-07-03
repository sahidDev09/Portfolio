import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div className=" w-full md:p-20 p-5 bg-[#787878] rounded-t-3xl">
      <h1 className="text-['Neue_Montreal'] text-[3.6vw] leading-[4vw]">
        Welcome to my digital portfolio! I’m Sahid, a passionate MERN stack
        developer dedicated to crafting beautiful and functional websites. Dive
        in to explore my work and journey.
        <span className="hidden md:inline-flex ml-4 btn font-light border-none transition-all bg-[#3DB883] rounded-full hover:text-[#3DB883] text-white text-[1.5vw] md:p-3 ">
          Latest Projects
          <span className=" -rotate-45 bg-white text-black rounded-full">
            <IoArrowForward />
          </span>
        </span>
        <button className="md:hidden mt-2 flex items-center gap-1 text-[2vw] bg-[#3DB883] rounded-full p-[4px]">
          Latest Projects
          <span className=" -rotate-45 bg-white text-black rounded-full">
            <IoArrowForward />
          </span>
        </button>
      </h1>

      <hr className=" md:my-14 my-8 border-[1px] border-zinc-400" />
    </div>
  );
};

export default About;
