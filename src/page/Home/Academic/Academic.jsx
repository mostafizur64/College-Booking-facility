import React from "react";
import {
  FaGraduationCap,
  FaArrowRight,
  FaUserGraduate,
  FaEdit,
} from "react-icons/fa";
const Academic = () => {
  return (
    <div className="bg-[#fff] mt-24 text-sky-900 ">
      <div className="text-center text-sky-900 ">
        <h2 className="text-4xl font-bold">Academic</h2>
        <p className="text-2xl w-[650px] mx-auto mt-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit tellus
          luctus nec ullamcorper mattis
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        <div className="bg-gray-300 p-8 rounded-lg">
          <div className="flex items-center gap-2">
            <FaGraduationCap className="text-red-500 text-5xl" />
            <h3 className="text-2xl font-semibold">Undergraduate Education</h3>
          </div>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam
            unde ea magni laudantium libero, quia voluptate sit fugiat obcaecati
            illum error id quo necessitatibus tenetur molestias repellat, harum
            esse.
          </p>
          <div className="flex  justify-center items-center gap-2 -ml-[135px] mt-4">
            <p>Undergraduate Education</p>
            <span>
              <FaArrowRight className="text-lg" />
            </span>
          </div>
        </div>
        <div className="bg-gray-300 p-8 rounded-lg">
          <div className="flex items-center gap-2">
            <FaUserGraduate className="text-red-500 text-5xl" />
            <h3 className="text-2xl font-semibold">Graduate Education</h3>
          </div>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam
            unde ea magni laudantium libero, quia voluptate sit fugiat obcaecati
            illum error id quo necessitatibus tenetur molestias repellat, harum
            esse.
          </p>
          <div className="flex  justify-center items-center gap-2 -ml-[135px] mt-4">
            <p>Undergraduate Education</p>
            <span>
              <FaArrowRight className="text-lg" />
            </span>
          </div>
        </div>
        <div className="bg-gray-300 p-8 rounded-lg">
          <div className="flex items-center gap-2">
            <FaEdit className="text-red-500 text-5xl" />
            <h3 className="text-2xl font-semibold">Lifelong learning</h3>
          </div>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam
            unde ea magni laudantium libero, quia voluptate sit fugiat obcaecati
            illum error id quo necessitatibus tenetur molestias repellat, harum
            esse.
          </p>
          <div className="flex  justify-center items-center gap-2 -ml-[135px] mt-4">
            <p>Undergraduate Education</p>
            <span>
              <FaArrowRight className="text-lg" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academic;
