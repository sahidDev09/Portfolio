const Nabvar = () => {
  return (
    <div className="fixed z-[999] w-full font-['Neue_Montreal'] pt-2">
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
                <a href="">About me</a>
              </li>
              <li>
                <a href="">Skills</a>
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
            <li className=" hover:bg-[#3DB883] hover:rounded-full transition-all">
              <a href="">About me</a>
            </li>
            <li className=" hover:bg-[#3DB883] hover:rounded-full transition-all">
              <a href="">Skills</a>
            </li>
            <li className=" hover:bg-[#3DB883] hover:rounded-full transition-all">
              <a href="">Projects</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
          <li className=" hidden md:inline hover:bg-[#3DB883] border border-[#3DB883] list-none p-2 rounded-full px-4">
            <a className=" text-zinc-300" href="">
              Linkedin
            </a>
          </li>
          <a className="p-2 px-4 rounded-full bg-[#3DB883] border-none text-white hover:bg-[#267e58]">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nabvar;
