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
      <Link
        to={`/chi-tiet?maKhoaHoc=${item?.maKhoaHoc}`}
        className="khoa-hoc-card cursor-pointer"
      >
        <div className="w-full h-[220px] border">
          <img
            src={item.hinhAnh}
            alt="Loading..."
            onError={handleError}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-5 space-y-5 border-x khoa-hoc-card-content">
          <h2 className="font-semibold bg-purple-600 px-2 text-white khoa-hoc-card-ten">
            {item.tenKhoaHoc}
          </h2>
          <h3>
            Nhu cầu về phát triển công nghệ đang ngày càng tăng trên thế giới
            ...
          </h3>
          <div className="flex justify-start items-center gap-4">
            <img
              src="../../../public/Elon_Musk.jpg"
              alt=""
              className="w-5 rounded-full"
            />
            <p>Elon Musk</p>
          </div>
        </div>
        <div className="flex justify-between items-center px-5 py-3 border">
          <p className="text-gray-400">
            <span className="text-yellow-500">
              4.5 <i class="fa-solid fa-star"></i>
            </span>{" "}
            {"("}
            {item.luotXem}
            {")"}
          </p>
          <button className="button-pink border-transparent">
            <Link to={`/chi-tiet?maKhoaHoc=${item?.maKhoaHoc}`}>ĐĂNG KÝ</Link>
          </button>
        </div>
        {/* <Link
          to={
            getLocalStorage("user")
              ? `/chi-tiet?maKhoaHoc=${item?.maKhoaHoc}`
              : `/login`
          }
        >
          ĐĂNG KÝ
        </Link> */}
      </Link>
    </>
  );
};

export default KhoaHocCard;
