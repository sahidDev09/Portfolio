/* eslint-disable react/no-unescaped-entities */
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div className=" w-full md:p-20 p-5 bg-zinc-900 rounded-t-3xl">
      <h1 className="text-['Neue_Montreal'] text-[3.6vw] leading-[4vw] ">
        Welcome to my digital portfolio! I’m Sahid, a passionate MERN stack
        developer dedicated to crafting beautiful and functional websites. Dive
        in to explore my work and journey.
        <span className="hidden md:inline-flex ml-4 btn font-light border-none transition-all bg-[#3DB883] hover:bg-zinc-700 rounded-full hover:text-[#3DB883] text-white text-[1.5vw] md:p-3 ">
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

      <div className=" grid md:grid-cols-2">
        <div className="about-details">
          <h1 className=" font-['Neue_Montreal'] text-[3vw] text-highlight-btn">
            My Aproach
          </h1>
          <hr className=" my-3" />

          <h1 className=" text-7xl font-bold uppercase ">SAHID AHMED</h1>
          <p className=" text-zinc-400">
            Computer Science and Engineering Student & MERN Stack Developer
          </p>
          <h1 className=" text-2xl font-semibold my-4">About Me</h1>
          <p className=" flex flex-col gap-3 text-zinc-400">
            Hello! I am a MERN stack developer with expertise in HTML, CSS,
            Tailwind, JavaScript, React.js, Express.js, Node.js, MongoDB,
            Firebase, Git, and GitHub. I started my journey with Programming
            Hero and am currently exploring Next.js to enhance my skills{" "}
            <span>
              As a computer science student at Metropolitan University Sylhet, I
              love learning new technologies and collaborating in team
              environments. My goal is to build innovative web applications with
              great user experiences.
            </span>
            <span>Let's connect and create something amazing together!</span>
          </p>
          <div>
            <h1 className=" text-2xl font-semibold my-4">Contact With me</h1>
            <ul className=" flex gap-4 items-center">
              <li>
                <a
                  href="https://www.linkedin.com/in/sahidofficial09"
                  target="_blank">
                  <img
                    className=" w-14"
                    src="https://i.ibb.co/R4rby6v/linkedin.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://discord.gg/JTNQUePX" target="_blank">
                  <img
                    className=" w-14"
                    src="https://i.ibb.co/FHfPL6C/discord.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/Sm.sahid99" target="_blank">
                  <img
                    className=" w-14"
                    src="https://i.ibb.co/0ymLbNB/facebook.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/0sahid_99" target="_blank">
                  <img
                    className=" w-14"
                    src="https://i.ibb.co/sm73CBR/instagram.png"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" bg-green-500">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
