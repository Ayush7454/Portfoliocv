import React from "react";
 

//import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="   mb-20 flex items-center justify-between py-6">
      <div className="  flex flex-shrink-0 items-center text-4xl">
        <p className="mx-2 w-10">
          <a href="https://drive.google.com/file/d/1t5ByT61p5sAzb3tbHwvGB1y3FRph2Bcr/view?usp=drivesdk ">
            Resume
          </a>
        </p>
      </div>
      <div
        className="m-8 flex items-center justify-center gap-4 text-2xl
         "
      >
        {/* <a
        href="https://www.linkedin.com/in/ayush-kumar-sinha-a89aa7227"
        >
        <FaInstagram  />
        </a> */}
        <a
        href="https://www.linkedin.com/in/ayush-kumar-sinha-a89aa7227"
        >
        <FaLinkedin />
        </a>
        <a
        href="https://github.com/Ayush7454"
        >
        <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;