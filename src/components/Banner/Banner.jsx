import React from "react";
import hero1 from "./../../assets/img/hero1.png";

const Banner = () => {
  return (
    <div className="banner">
      {/* <div className="container py-10 xs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[1140px]"> */}
      {/* <div className="xs:block md:flex justify-between items-center gap-5"> */}
      {/* <div className="xs:full lg:w-6/12 mb-5" data-aos="fade-up"> */}
      <div className="container">
        <div className="flex justify-between items-center gap-5">
          <div className="space-y-8">
            <h1 className="text-6xl text-[#211C5B]">
              Khởi đầu sự nghiệp của bạn
            </h1>
            <p className="xs:text-2xl md:text-3xl mb-7 text-[#211C5B]">
              Trở thành chuyên gia lập trình tại CyberSoft
            </p>
            <button className="me-5 mb-4 border-transparent">
              Xem khóa học
            </button>
            <button className="border-transparent">Tư vấn học</button>
          </div>
          {/* <div className='xs:full lg:w-6/12' data-aos="fade-left">
           */}
          <div className="xs:full lg:w-6/12">
            <img className="w-full" src={hero1} alt="err" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
