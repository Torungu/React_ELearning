import React from "react";
import hero1 from "./../../assets/img/hero1.png";

const Banner = () => {
  return (
    <div className="banner">
      {/* <div className="container py-10 xs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[1140px]"> */}
      {/* <div className="xs:block md:flex justify-between items-center gap-5"> */}
      {/* <div className="xs:full lg:w-6/12 mb-5" data-aos="fade-up"> */}
      <div className="container mx-auto pt-16 md:pt-20 lg:pt-0">
        <div className="flex justify-between items-center gap-5">
          <div className="space-y-5 sm:space-y-8 ">
            <h1 className="text-3xl sm:text-6xl text-[#211C5B] font-semibold">
              Khởi đầu sự nghiệp của bạn
            </h1>
            <p className="text-md sm:text-3xl text-[#211C5B]">
              Trở thành chuyên gia lập trình tại CyberSoft
            </p>
            <div className="sm:space-x-5 sm:flex space-y-5">
              <button className="border-transparent">Xem khóa học</button>
              <button className="border-transparent">Tư vấn học</button>
            </div>
          </div>
          {/* <div className='xs:full lg:w-6/12' data-aos="fade-left">
           */}
          <div className="w-full sm:w-1/2">
            <img className="w-full" src={hero1} alt="err" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
