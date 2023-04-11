import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  const appliedJob = useLoaderData();

  const [selectItem, setSelectItem] = useState("");

  const handleChange = (event) => {
    setSelectItem(event.target.value);
  };
  const filterAppliedItem = appliedJob.filter(
    (jobleItem) => jobleItem.job_type === selectItem || selectItem === ""
  );
  return (
    <div>
      <div className="bg-[#babfff29] py-16 text-center">
        <h1 className=" text-3xl font-semibold text-center">Applied Jobs</h1>
      </div>
      <div className="py-24">
        <div className="text-end mb-4 max-w-6xl lg:mx-auto mt-5 mr-6 ">
          <select
            value={selectItem}
            onChange={handleChange}
            className="bg-slate-100 px-8 py-2"
          >
            <option value="">Filter By</option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
          </select>
        </div>
        {filterAppliedItem.map((item, idx) => (
          <div key={idx} className="max-w-6xl mx-auto mb-8">
            <div className="  bg-[#ffffff75] py-12 px-7 border border-gray-200 rounded-xl mx-6 lg:mx-0 shadow-sm">
              <div className="lg:flex flex-row items-center">
                <div className="rounded-2xl py-6 px-6 ">
                  <img className="w-60 " src={item.logo} alt="" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold py-4">{item.job_title}</h3>
                  <p className="leading-12">{item.company_name}</p>
                  <div className="flex py-4">
                    <p className="text-purple-500 border rounded-sm border-purple-500 px-3 py-1 mr-4">
                      {item.job_type}
                    </p>
                    <p className="text-purple-500 border rounded-sm border-purple-500 px-3 py-1 ">
                      {item.Job_time}
                    </p>
                  </div>
                  <div className="flex items-center gap-10">
                    <div className="flex items-center justify-center gap-2">
                      <MapPinIcon className="w-6 h-6 text-slate-400" />
                      <p>{item.location}</p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CurrencyDollarIcon className="w-6 h-6 text-slate-400" />
                      <p>Salary: {item.salary}</p>
                    </div>
                  </div>
                </div>
                <Link to={`/jobdetails/${item.id}`}>
                  <button className="bg-purple-500 text-white h-12 w-36 rounded-sm capitalize font-bold hover:opacity-80 ease-in duration-200 mt-3">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
