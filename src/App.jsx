import About from "./Components/About";
import Landing from "./Components/Landing";
import Marquee from "./Components/Marquee";
import Nabvar from "./Components/Shared/Nabvar";
import SkillsEdu from "./Components/SkillsEdu";
import "./index.css";

const App = () => {
  return (
    <div className=" w-full min-h-screen text-white bg-zinc-900">
      <Nabvar />
      <Landing />
      <Marquee />
      <About />
      <SkillsEdu />
    </div>
  );
};

export default App;
