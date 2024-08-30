/* eslint-disable no-unused-vars */

import About from "./Components/About";
import Landing from "./Components/Landing";
import Marquee from "./Components/Marquee";
import Nabvar from "./Components/Shared/Nabvar";
import SkillsEdu from "./Components/SkillsEdu";
import LocomotiveScroll from "locomotive-scroll";

import "./index.css";
import Footer from "./Components/Shared/Footer";
import FeaturesProjects from "./Components/FeaturesProjects";

const App = () => {
  
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=" w-full min-h-screen text-white bg-zinc-900">
      <Nabvar />
      <Landing />
      <Marquee />
      <About />
      <SkillsEdu />
      <FeaturesProjects />
      <Footer />
    </div>
  );
};

export default App;
