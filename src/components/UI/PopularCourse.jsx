import React from "react";
import { Link } from "react-router-dom";
import rightImg from "./../../assets/img/bg-discover-front.png";
import popular1 from "./../../assets/img/logo-popular-courses.png";
import popular2 from "./../../assets/img/logo-popular-courses2.png";
import popular3 from "./../../assets/img/logo-popular-courses3.png";
import popular4 from "./../../assets/img/logo-popular-courses4.png";

const PopularCourse = () => {
  return (
    <div className="popularCourse bg-purple-100">
      {/* <div className="container gap-3 xs:block md:flex items-start py-10 xs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[1140px]"> */}
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="left mb-5" data-aos="fade-down">
            <div className="popular_title">
              <h2 className="font-semibold text-4xl leading-normal mb-3">
                Discover Our Popular Courses
              </h2>
              <p className="mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="popular_content grid grid-cols-2 grid-rows-2 mb-5">
              <div className="flex flex-col justify-center mb-5">
                <img src={popular1} alt="err" width={78} height={78} />
                <p>Digital Painting</p>
              </div>
              <div className="flex flex-col justify-center mb-5">
                <img src={popular2} alt="err" width={78} height={78} />
                <p>Code Learning</p>
              </div>
              <div className="flex flex-col justify-center mb-5">
                <img src={popular3} alt="err" width={78} height={78} />
                <p>Language Learning</p>
              </div>
              <div className="flex flex-col justify-center mb-5">
                <img src={popular4} alt="err" width={78} height={78} />
                <p>Web Design</p>
              </div>
            </div>
            <Link className="button-pink mb-3 border-transparent">
              More Course
            </Link>
          </div>
          <div className="right mb-5" data-aos="fade-up">
            <div className="overlay"></div>
            <img src={rightImg} alt="err" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourse;
