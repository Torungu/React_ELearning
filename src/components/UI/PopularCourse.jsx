import React from "react";
import { Link } from "react-router-dom";
import rightImg from "./../../assets/img/bg-discover-front.png";
import popular1 from "./../../assets/img/logo-popular-courses.png";
import popular2 from "./../../assets/img/logo-popular-courses2.png";
import popular3 from "./../../assets/img/logo-popular-courses3.png";
import popular4 from "./../../assets/img/logo-popular-courses4.png";

const PopularCourse = () => {
  return (
    <div className="popularCourse bg-purple-100 py-8">
      {/* <div className="container gap-3 xs:block md:flex items-start py-10 xs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[1140px]"> */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="left space-y-8" data-aos="fade-down">
            <div className="popular_title space-y-5">
              <h2 className="font-semibold text-4xl">
                Discover Our Popular Courses
              </h2>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="popular_content grid grid-cols-2 grid-rows-2 space-y-5">
              <div className="flex flex-col justify-center">
                <img src={popular1} alt="err" width={78} height={78} />
                <p>Digital Painting</p>
              </div>
              <div className="flex flex-col justify-center">
                <img src={popular2} alt="err" width={78} height={78} />
                <p>Code Learning</p>
              </div>
              <div className="flex flex-col justify-center">
                <img src={popular3} alt="err" width={78} height={78} />
                <p>Language Learning</p>
              </div>
              <div className="flex flex-col justify-center">
                <img src={popular4} alt="err" width={78} height={78} />
                <p>Web Design</p>
              </div>
            </div>
            <button className="button-pink border-transparent">
              <Link>More Course</Link>
            </button>
          </div>
          <div className="right space-y-8" data-aos="fade-up">
            <div className="overlay"></div>
            <img src={rightImg} alt="err" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourse;
