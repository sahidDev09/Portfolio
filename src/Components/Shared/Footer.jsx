import { FaEnvelope, FaFacebook, FaPhone } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="bg-zinc-900 border-t border-zinc-700 dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center text-center">
            <a href="">
              <img
                className=" w-24"
                src="https://i.ibb.co/zh90RR6/SLOGO.png"
                alt=""
              />
            </a>
            <div className="max-w-md mx-auto mt-4 md:flex items-center gap-4 text-gray-500 dark:text-gray-400">
              <div className=" flex items-center  gap-2">
                <FaEnvelope />
                <h1>iamsahidofficial99@gmail.com</h1>
              </div>
              <div className=" flex items-center  gap-2">
                <FaPhone />
                <h1>+8801784-321799</h1>
              </div>
            </div>
          </div>

          <hr className="my-10 border-zinc-500 dark:border-gray-700" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-500">
              © Copyright 2024. All Rights Reserved.
            </p>

            <div className="flex mt-3 -mx-2 sm:mt-0">
              <a
                href="https://www.facebook.com/Sm.sahid99"
                target="_blank"
                className="mx-2 text-xl text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit">
                <FaFacebook />
              </a>

              <a
                href="https://www.linkedin.com/in/sahidofficial09"
                target="_blank"
                className="mx-2 text-xl text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit">
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/sahidDev09"
                target="_blank"
                className="mx-2 text-xl text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
