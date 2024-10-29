import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import CountUp from "react-countup";

const Prepare = () => {
  const [startCount, setStartCount] = useState(false);
  return (
    <div className="prepare min-h-1/2">
      <Waypoint onEnter={() => setStartCount(true)} />
      {/* <div className="container prepare_content gap-3 xs:block md:flex items-start py-10 xs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[1140px]"> */}
      <div className="container prepare_content gap-3 flex items-center justify-between py-8">
        <div className="prepare_left" data-aos="fade-up">
          <div className="title">
            <h2 className="text-4xl">
              Prepare for the future, learn the right skills{" "}
            </h2>
          </div>
        </div>
        <div className="prepare_right grid grid-cols-3" data-aos="fade-down">
          <div className="">
            {startCount && <CountUp end={98} duration={8}></CountUp>}
            <p>Courses</p>
          </div>
          <div className="">
            {startCount && <CountUp end={129} duration={8}></CountUp>}
            <p>Teachers</p>
          </div>
          <div className="">
            {startCount && <CountUp end={23} duration={8}></CountUp>}
            <p>Award</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prepare;
