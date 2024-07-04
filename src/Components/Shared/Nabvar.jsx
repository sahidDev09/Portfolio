/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import resume from "../../assets/resume/Profile-3.pdf";

const Navbar = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const downloadLink = useRef(null);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      downloadLink.current.click();
    }, 2000);
  };

  return (
    <div className="fixed z-[999] w-full font-['Neue_Montreal'] bg-zinc-900 pt-2">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box text-black z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a href="#aboutme">About me</a>
              </li>
              <li>
                <a href="#skillsedu">Skills</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
            </ul>
          </div>
          <img
            className=" md:w-14 w-10"
            src="https://i.ibb.co/zh90RR6/SLOGO.png"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
            <li className=" font-neue hover:bg-[#3DB883] hover:rounded-full transition-all">
              <a href="#aboutme">About me</a>
            </li>
            <li className=" font-neue hover:bg-[#3DB883] hover:rounded-full transition-all">
              <a href="#skillsedu">Skills</a>
            </li>
            <li className=" font-neue hover:bg-[#3DB883] hover:rounded-full transition-all">
              <a href="">Projects</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
          <a
            href="https://github.com/sahidDev09"
            target="_blank"
            className="hoverAnim bg-zinc-700 hover:bg-zinc-800 list-none p-2 rounded-full px-4">
            <div className=" flex gap-3 items-center">
              <span>
                <FaGithub />
              </span>
              <h1 className="hidden md:inline text-zinc-300 text-lg">GitHub</h1>
              <span className="arrowGit hidden md:inline bg-white text-black rounded-full">
                <IoArrowForward />
              </span>
            </div>
          </a>
          <button
            onClick={handleDownload}
            className="relative p-2 px-4 rounded-full text-sm md:text-lg bg-[#3DB883] border-none text-white hover:bg-[#267e58]">
            {isDownloading ? (
              <h1 className=" flex items-center justify-center">
                Downloading
                <span className="loading loading-infinity loading-md"></span>
              </h1>
            ) : (
              "Download CV"
            )}
          </button>
          <a
            ref={downloadLink}
            href={resume}
            download="resume"
            style={{ display: "none" }}></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
