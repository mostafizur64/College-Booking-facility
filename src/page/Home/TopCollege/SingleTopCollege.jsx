import React from "react";

const SingleTopCollege = ({ college }) => {
    const {id,name,image,rating,events,admission_date, research_history,sports}
    =college
    const {top_research_area,total_projects}=research_history
  return (
    <div className="bg-gray-300 rounded-lg">
   
        <img className="w-full h-60 object-cover rounded-lg"
          src={image}
          alt="Shoes"
        />
     
      <div className="card-body text-sky-950 flex items-center justify-center">
        <h2 className="card-title">{name}</h2>
        <span>Rating:{rating}</span>
        <span>Admission Date:{admission_date}</span>
        <span>Event:{events}</span>
        <p>Research:{top_research_area} ({total_projects})</p>
        <p>Sport:{sports}</p>
        <div className="card-actions ">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleTopCollege;
