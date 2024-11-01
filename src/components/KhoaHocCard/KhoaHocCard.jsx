import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLocalStorage } from "../../utils/utils";
import { useLottie } from "lottie-react";
import loadingAnimation from "../../assets/animation/loadingAnimation.json";

const KhoaHocCard = ({ item }) => {
  const handleError = (e) => {
    e.target.src = "/public/errImg.svg";
  };
  return (
    <>
      <div className="item_khoaHoc">
        <div>
          <img src={item.hinhAnh} alt="Loading..." onError={handleError} />
        </div>
        <h2 className="leading-8">{item.tenKhoaHoc}</h2>
        <p className="text-[#7A7A7A] text-base"></p>
        <div className="flex items-center justify-start mb-8">
          <span className="text-[#E31C8D] me-4 inline-block">
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-regular fa-star" />
          </span>
        </div>
        <Link to={`chi-tiet?maKhoaHoc=${item.maKhoaHoc}`}>ĐĂNG KÝ</Link>
        {/* <Link
          to={
            getLocalStorage("user")
              ? `/chi-tiet?maKhoaHoc=${item?.maKhoaHoc}`
              : `/login`
          }
        >
          ĐĂNG KÝ
        </Link> */}
      </div>
    </>
  );
};

export default KhoaHocCard;
