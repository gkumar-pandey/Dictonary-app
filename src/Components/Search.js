import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = () => {
  return (
    <div className="max-w-3xl mx-auto my-2 ">
      <div className="flex relative">
        <input
          placeholder="Search..."
          className="border bg-gray-100 text-black focus:outline-none  rounded-lg p-4 h-10 w-[100%]"
        />
        <BiSearchAlt2 className="absolute right-2 text-xl text-violet-500 top-[20%]" />
      </div>
    </div>
  );
};

export default Search;
