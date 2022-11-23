import { useParams } from "react-router-dom";
import { projectInfo } from "../constants/info";

const DetailProject = () => {
  const { projectId } = useParams();

  const project = projectInfo.filter((el) => el.slug === projectId)[0];

  return (
    <div className="w-[90vw] md:w-[60rem] mx-auto my-40">
      <h1 className="text-5xl text-white font-bold mb-8 text-center">
        {project?.name}
      </h1>
      <div className="my-8 space-y-8 max-w-[70%] mx-auto">
        <div className="text-white flex">
          {/* <div className="flex-1">Web Development</div> */}
          <div className="flex-1 text-center ">
            Stack : {project?.stack?.map((s, idx) => `${s}, `)}
          </div>
        </div>
        <p className="flex-1 text-gray-300 text-lg text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi harum
          accusamus numquam, nostrum ad similique eveniet assumenda cumque
          accusantium sit sapiente magni quasi doloremque dolorem.
        </p>
      </div>
      <div className="flex text-white text-lg mx-auto justify-center gap-4">
        <button className="h-12 w-32 border border-white hover:bg-white/20">
          Visit Site
        </button>
        <button className="h-12 w-32 border border-white hover:bg-white/20">
          Code
        </button>
      </div>
      <p className="text-lg text-white text-center mt-12 mb-4">Preview :</p>
      <div className="w-full space-y-6 overflow-hidden">
        {project?.imageScreenshoot?.map((sourceImg, idx) => (
          <img
            key={idx}
            src={sourceImg}
            alt="Screenshot"
            className="w-full h-full object-contain rounded-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default DetailProject;
