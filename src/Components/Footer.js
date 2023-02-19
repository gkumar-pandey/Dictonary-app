import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-center gap-4  ">
        <div className="text-3xl cursor-pointer text-violet-500 ">
          <a target={"_blank"} href={"https://github.com/gkumar-pandey"}>
            <BsGithub />
          </a>
        </div>
        <div className="text-3xl cursor-pointer text-violet-500 ">
          <a target={"_blank"} href={"https://www.linkedin.com/in/gkpandey/"}>
            <BsLinkedin />
          </a>
        </div>
        <div className="text-3xl cursor-pointer text-violet-500 ">
          <a target={"_blank"} href={"https://twitter.com/gautamkp078"}>
            <BsTwitter />
          </a>
        </div>
      </div>
      <div className="text-center text-violet-500 font-semibold font-serif my-1">
        Develop by <a>GKP</a>
      </div>
    </div>
  );
};

export default Footer;
