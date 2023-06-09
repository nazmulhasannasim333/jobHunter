import React from "react";

const CategoryItem = ({item}) => {
    const {categoryLogo, catgoryName,jobsAvailable} = item;
  return (
    <div >
      <div className="  bg-[#babfff2c] text-center lg:text-start py-12 px-7 rounded-xl cursor-pointer ">
        <div className="rounded-2xl py-6 px-6">
          <img className="h-10 w-12 mx-auto lg:mx-0"  src={categoryLogo} alt="" />
        </div>
        <div>
          <h3 className="text-2xl font-bold py-4 ">{catgoryName}</h3>
          <p className="leading-12">
           {jobsAvailable}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
