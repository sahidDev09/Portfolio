const Landing = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.4"
      className=" relative w-full md:h-screen bg-zinc-900 flex justify-center items-center">
      <img
        className=" my-20 md:my-0"
        src="https://i.ibb.co/rQc4c2z/git-Banner-ladning.png"
        alt=""
      />

      {/* react logo icon animation */}

      <img
        className=" absolute lg:w-16 w-5 md:w-12 lg:right-[55vw] lg:top-[65vh] md:top-[63vh] md:right-[55vw] top-[31vh] right-[55.5vw] animate-spin-slow"
        src="https://i.ibb.co/xf1xq4Z/pngwing-com-5.png"
        alt=""
      />
    </div>
  );
};

export default Landing;
