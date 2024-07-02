import Landing from "./Components/Landing";
import Nabvar from "./Components/Shared/Nabvar";
import "./index.css";

const App = () => {
  return (
    <div className=" w-full h-screen text-white">
      <Nabvar />
      <Landing />
    </div>
  );
};

export default App;
