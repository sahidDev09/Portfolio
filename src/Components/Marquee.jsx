import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className=" w-full md:py-20 py-10 rounded-t-3xl bg-[#3DB883]">
      <div className=" text border-t border-b border-zinc-300 whitespace-nowrap overflow-hidden flex gap-6 uppercase">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className=" text-[22vw] md:-mb-12 pt-10 leading-none font-semibold font-['Founders_Grotesk_X-Condensed']">
          About me.
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className=" text-[22vw] md:-mb-12 pt-10 leading-none font-semibold font-['Founders_Grotesk_X-Condensed']">
          About me.
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
