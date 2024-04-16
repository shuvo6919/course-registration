import { LuDollarSign } from "react-icons/lu";
import { PiBookOpenLight } from "react-icons/pi";

const Course = ({ course, handleSelect }) => {
  const { title, cover_image, description, credit, price } = course;
  console.log(course);
  return (
    <div className="p-4 shadow-xl bg-white rounded-xl">
      <img className="w-full mb-2" src={cover_image} alt="" />
      <h3 className="text-md font-semibold mb-2">{title}</h3>
      <p className="text-slate-500 text-sm mb-2">{description}</p>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="text-2xl me-2">
            <LuDollarSign />
          </div>
          <p className="text-slate-500">Price : {price}</p>
        </div>
        <div className="flex items-center">
          <div className="text-2xl me-2">
            <PiBookOpenLight />
          </div>
          <p className="text-slate-500">Credit : {credit}hr</p>
        </div>
      </div>
      <button
        onClick={() => handleSelect(course)}
        className="bg-blue-600 p-2 text-white w-full rounded-lg cursor-pointer"
      >
        Select
      </button>
    </div>
  );
};

export default Course;
