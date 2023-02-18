import React from "react";

const ToogleBtn = ({ toggle, setToggle }) => {
  return (
    <>
      <div>
        <div
          onClick={() => setToggle(!toggle)}
          className=" relative inline-flex items-center cursor-pointer"
        >
          <div
            className={`w-11 h-6    ${
              toggle ? "bg-violet-500" : "bg-gray-300"
            } rounded-full `}
          ></div>
          <span
            className={`w-5 rounded-full h-5 m-[2px] absolute bg-[#fff] ${
              toggle ? "right-0" : "left-0"
            }`}
          ></span>
        </div>
      </div>
    </>
  );
};

export default ToogleBtn;
