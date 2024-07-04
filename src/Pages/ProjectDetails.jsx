import { Link, useLoaderData, useParams } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import { IoIosArrowBack, IoIosCheckbox } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { BsEyeFill } from "react-icons/bs";

const ProjectDetails = () => {
  const projects = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const projectDet = projects.find((p) => p.id === intId);

  console.log(projectDet);

  return (
    <div className="text-zinc-900 bg-zinc-800">
      <div className=" container mx-auto w-full pt-5 ">
        <Link to="/">
          <div className=" bg-white w-fit rounded-full flex items-center p-3">
            <IoIosArrowBack className=" text-2xl" />
            Back
          </div>
        </Link>
        <div className="grid md:grid-cols-2 gap-5 p-10">
          <div className="imgage bg-zinc-700 rounded-2xl ">
            <img
              className=" rounded-t-2xl w-full object-cover h-[550px]"
              src={projectDet.image}
              alt=""
            />
            <div className=" p-4">
              <h1 className=" font-founders_bl font-semibold text-white md:text-4xl uppercase my-4">
                {projectDet.project_name}
              </h1>
            </div>
          </div>
          <div className="details flex flex-col gap-3">
            <h1 className=" text-2xl font-semibold text-white">
              Description :
            </h1>
            <p className=" text-zinc-400">{projectDet.description}</p>
            <h1 className="text-2xl font-semibold text-white">Key Features:</h1>
            <ul>
              {projectDet.features.map((fet, index) => (
                <li className=" flex items-center text-zinc-300" key={index}>
                  <span>
                    <IoIosCheckbox className=" text-highlight-btn" />
                  </span>
                  {fet}
                </li>
              ))}
            </ul>
            <h1 className="text-2xl font-semibold text-white">Technology:</h1>
            <div className="flex flex-wrap text-white gap-2 my-5">
              {projectDet.technology_uses.map((tech, index) => (
                <h1
                  className="transition-all hover:scale-105 text-md rounded-full px-4 py-2 bg-highlight-btn"
                  key={index}>
                  {tech}
                </h1>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className=" btn bg-zinc-700 border-none text-white">
                <a
                  href={projectDet.client}
                  target="_blank"
                  className=" flex items-center gap-4">
                  <span>
                    <FaGithub className=" text-xl" />
                  </span>
                  GitHub-Client
                  <span>
                    <IoArrowForward className=" text-xl m-1 bg-white rounded-full text-black" />
                  </span>
                </a>
              </button>
              <button className=" btn bg-zinc-700 border-none text-white">
                <a
                  href={projectDet.server}
                  target="_blank"
                  className=" flex items-center gap-4">
                  <span>
                    <FaGithub className=" text-xl" />
                  </span>
                  GitHub-Server
                  <span>
                    <IoArrowForward className=" text-xl m-1 bg-white rounded-full text-black" />
                  </span>
                </a>
              </button>
            </div>
            <button className=" btn w-full bg-highlight-btn border-none text-white">
              <a
                href={projectDet.live}
                target="_blank"
                className=" flex items-center gap-4">
                <span>
                  <BsEyeFill className=" text-xl" />
                </span>
                Live-Preview
              </a>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
