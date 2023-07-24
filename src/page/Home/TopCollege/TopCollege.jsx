import React, { useEffect, useState } from "react";
import SingleTopCollege from "./SingleTopCollege";

const TopCollege = () => {
  const [toCollege, setTopCollege] = useState([]);
  useEffect(() => {
    fetch("/college.json")
      .then((res) => res.json())
      .then((data) => {
        setTopCollege(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="mt-12 bg-[#fff]">
      <h2 className="text-center text-sky-900 font-bold text-4xl mt-24 p-[30px]">
        Top College
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full  shadow-xl mt-8">
        {toCollege.map((college) => (
          <SingleTopCollege college={college} key={college.id} />
        ))}
      </div>
    </div>
  );
};

export default TopCollege;
