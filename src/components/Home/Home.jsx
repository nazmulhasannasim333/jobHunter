import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import JobCategory from "../JobCategory/JobCategory";

const Home = () => {
    const [seeAll, setSeeAll] = useState(false)
  const featured = useLoaderData();
  
  return (
    <div>
      <Banner />
      <JobCategory />
      <div>
        <div className="py-10 max-w-7xl mx-auto mb-16">
          <div className="text-center m-auto mb-20 md:w-1/2">
            <h1 className="text-5xl font-semibold mb-6">Featured Jobs</h1>
            <p>
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </p>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8">
            {!seeAll ? featured.slice(0, 4).map((jobsItem) => (
                <Featured key={jobsItem.id} jobsItem={jobsItem} />
              )) : featured.map((jobsItem) => (
                <Featured key={jobsItem.id} jobsItem={jobsItem} />
              )) }
          </div>
          <div className="text-center mt-7">
            {
                !seeAll ? <button onClick={() => setSeeAll(true)} className="bg-purple-500 text-white px-6 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
                See All Jobs
              </button> : <button onClick={()=> setSeeAll(false)} className="bg-purple-500 text-white px-6 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
              See Less Jobs
            </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
