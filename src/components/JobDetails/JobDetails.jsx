import {
  BriefcaseIcon,
  CurrencyDollarIcon,
  InboxIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../../utilities/fakedb";

const JobDetails = () => {
  const id = useParams();
  const jobDetails = useLoaderData();
  const [job, setJob] = useState({});
  useEffect(() => {
    if (jobDetails) {
      const checkData = jobDetails.find((jobItem) => jobItem.id == id.jobId);
      setJob(checkData);
    }
  }, []);

  const handleApply = (id) => {
    addToDb(id);
  };

  return (
    <div className=" bg-[#babfff29]">
      <h1 className=" text-3xl font-semibold text-center pt-8">Job Details</h1>
      <div className="bg-white ">
        <div className="max-w-7xl mx-auto py-24 mt-24 grid lg:grid-cols-3 gap-6 md:grid-cols-1 px-8">
          <div className="col-span-2">
            <p className="font-semibold mb-3">
              Job Description:{" "}
              <span className="font-normal">{job?.description}</span>
            </p>
            <p className="font-semibold my-3">
              Job Responsibility:{" "}
              <span className="font-normal">{job?.responsibility}</span>
            </p>
            <p className="font-semibold my-2">Educational Requirements:</p>
            <p className="my-3">{job?.educational_requrements}</p>
            <p className="font-semibold my-2">Experiences</p>
            <p className="my-3">{job?.experiance}</p>
          </div>
          <div>
            <div>
              <div className="bg-[#98a1ff29] py-6 px-14 rounded-md">
                <h5 className="my-5 font-semibold text-xl">Job Details</h5>
                <hr />
                <div className="flex  items-center gap-2 my-3">
                  <CurrencyDollarIcon className="w-6 h-6 text-purple-500" />
                  <p className="font-semibold">
                    Salary: <span className="font-normal">{job?.salary}</span>
                  </p>
                </div>
                <div className="flex j items-center gap-2 my-3">
                  <BriefcaseIcon className="w-6 h-6 text-purple-500" />
                  <p className="font-semibold">
                    Job Title:{" "}
                    <span className="font-normal">{job?.job_title}</span>
                  </p>
                </div>
                <h6 className="font-semibold text-xl">Contact Information</h6>
                <hr />
                <div className="flex items-center gap-2 my-3">
                  <PhoneIcon className="w-6 h-6 text-purple-500" />
                  <p className="font-semibold">
                    Phone:{" "}
                    <span className="font-normal">{job?.contact?.phone}</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 my-3">
                  <InboxIcon className="w-6 h-6 text-purple-500" />
                  <p className="font-semibold">
                    Email:{" "}
                    <span className="font-normal">{job?.contact?.email}</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <MapPinIcon className="w-6 h-6 text-purple-500" />
                  <p className="font-semibold">
                    Address:{" "}
                    <span className="font-normal">{job?.location}</span>
                  </p>
                </div>
              </div>
              <Link to="/appliedjobs">
                <button
                  onClick={() => handleApply(job.id)}
                  className="bg-purple-600 h-10 w-full rounded-md mt-2 text-white"
                >
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
