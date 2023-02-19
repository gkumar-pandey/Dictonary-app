import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-center gap-4  ">
        <div className="text-3xl cursor-pointer text-violet-500 ">
          <BsGithub />
        </div>
        <div className="text-3xl cursor-pointer text-violet-500 ">
          <BsLinkedin />
        </div>
        <div className="text-3xl cursor-pointer text-violet-500 ">
          <BsTwitter />
        </div>
      </div>
      <div className="text-center text-violet-500 font-semibold font-serif my-1">
        Develop by <a>GKp</a>
      </div>
    </div>
  );
};

export default Footer;
