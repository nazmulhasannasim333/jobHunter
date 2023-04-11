import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const Featured = ({ jobsItem }) => {
  const {
    company_name,
    job_title,
    job_type,
    Job_time,
    location,
    logo,
    salary,
    id,
  } = jobsItem;
  return (
    <div>
      <div className="  bg-[#ffffff75] py-12 px-7 border border-gray-200 rounded-xl shadow-sm">
        <div className="rounded-2xl py-6 px-6">
          <img className="h-32 w-80" src={logo} alt="" />
        </div>
        <div>
          <h3 className="text-2xl font-bold py-4">{job_title}</h3>
          <p className="leading-12">{company_name}</p>
          <div className="flex py-4">
            <p className="text-purple-500 border rounded-sm border-purple-500 px-3 py-1 mr-4">
              {job_type}
            </p>
            <p className="text-purple-500 border rounded-sm border-purple-500 px-3 py-1 ">
              {Job_time}
            </p>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex items-center justify-center gap-2">
              <MapPinIcon className="w-6 h-6 text-slate-400 " />
              <p>{location}</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CurrencyDollarIcon className="w-6 h-6 text-slate-400" />
              <p>Salary: {salary}</p>
            </div>
          </div>
          <Link to={`/jobdetails/${id}`}>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-sm capitalize font-bold hover:opacity-80 ease-in duration-200 mt-4">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
