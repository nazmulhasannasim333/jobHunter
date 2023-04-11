import React, { useEffect, useState } from "react";
import CategoryItem from "../CategoryItem/CategoryItem";

const JobCategory = () => {
    const [category, setCategory] = useState([])
    useEffect(()=>{
        fetch('category.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
  return (
    <div>
      <div className="py-20 max-w-7xl mx-auto">
        <div className="text-center m-auto mb-20 md:w-1/2">
          <h1 className="text-5xl font-semibold mb-6">
          Job Category List 
          </h1>
          <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8 ">
         {
            category.map((item, idx) => <CategoryItem key={idx} item={item}/>)
         }
        </div>
      </div>
    </div>
  );
};

export default JobCategory;

 
