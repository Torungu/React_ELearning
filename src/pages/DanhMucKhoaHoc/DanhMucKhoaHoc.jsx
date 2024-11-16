import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { khoaHocService } from "../../service/khoaHoc.service";
import { getLocalStorage, truncateText } from "../../utils/utils";
import KhoaHocCard from "../../components/KhoaHocCard/KhoaHocCard";
import { Rate, Tabs } from "antd";
import Slider from "react-slick";

const DanhMucKhoaHoc = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [listKhoaHoc, setListKhoaHoc] = useState([]);
  const [khoaHocThamKhao, setKhoaHocThamKhao] = useState();
  const handleError = (e) => {
    e.target.src = "/public/errImg.svg";
  };
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    className: "",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    let maDanhMuc = searchParam.get("maDanhMuc");
    khoaHocService
      .layKhoaHocTheoDanhMuc(maDanhMuc)
      .then((res) => {
        setListKhoaHoc(res.data);
        setKhoaHocThamKhao(Math.floor(Math.random() * listKhoaHoc.length));
      })
      .catch((err) => {});
  }, [searchParam.get("maDanhMuc"), searchParam.get("ten")]);

  const items = [
    {
      key: "1",
      label: <h1 className="font-semibold text-purple-500">Phổ biến</h1>,
      children: (
        <div className="slider-container py-5 ">
          <Slider {...settings}>
            {listKhoaHoc.slice(0, listKhoaHoc.length / 2).map((item, index) => {
              return (
                <div className="card-slider ">
                  <KhoaHocCard item={item} key={index} />
                  <p className="bg-red-600 w-fit px-2 py-1 text-white font-semibold card-note clip-triangle">
                    Popular
                  </p>
                </div>
              );
            })}
          </Slider>
        </div>
      ),
    },
    {
      key: "2",
      label: <h1 className="font-semibold text-purple-500">Xu hướng</h1>,
      children: (
        <div className="slider-container py-5 ">
          <Slider {...settings}>
            {listKhoaHoc.slice(listKhoaHoc.length / 2).map((item, index) => {
              return (
                <div className="card-slider">
                  <KhoaHocCard item={item} key={index} />
                  <p className="bg-yellow-400 w-fit px-2 py-1 text-white font-semibold card-note clip-triangle">
                    Trending
                  </p>
                </div>
              );
            })}
          </Slider>
        </div>
      ),
    },
  ];

  console.log(listKhoaHoc[khoaHocThamKhao]);

  return (
    <>
      <div className="container mx-auto pt-28">
        <div className="border-2 rounded-md w-fit p-2">
          <h1 className="text-[#211C5B] font-bold text-lg uppercase flex items-center gap-3">
            <i class="fa-solid fa-display purpl"></i>
            {searchParam.get("ten")}
          </h1>
        </div>
      </div>
      <div className="container mx-auto pb-10 space-y-8">
        <Tabs defaultActiveKey="1" items={items} />
        <h2 className="text-purple-600 text-3xl font-bold">
          Khóa học tham khảo
        </h2>
        <div className="sm:flex gap-10 border p-5 shadow-lg shadow-indigo-500/40">
          <img
            src={listKhoaHoc[khoaHocThamKhao]?.hinhAnh}
            alt="Loading..."
            onError={handleError}
            className="w-[400px] h-[200px] object-contain"
          />
          <div className="space-y-2">
            <h1 className="text-lg sm:text-2xl font-bold">
              {listKhoaHoc[khoaHocThamKhao]?.tenKhoaHoc}
            </h1>
            <p className="sm:text-xl">
              Learn everything in{" "}
              {listKhoaHoc[khoaHocThamKhao]?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
            </p>
            <p className="text-gray-500 text-sm">
              By{" "}
              <span className="capitalize">
                {listKhoaHoc[khoaHocThamKhao]?.nguoiTao?.hoTen}
              </span>
            </p>
            <p className="text-gray-500 text-sm">
              40 total hours &middot; 378 lectures &middot; Expert
            </p>
            <p className="text-yellow-400 flex items-center gap-1 sm:gap-3 text-sm">
              4.7
              <Rate disabled defaultValue={5} className="text-sm" />
              <span className="text-gray-400">
                {"("}
                {listKhoaHoc[khoaHocThamKhao]?.luotXem}
                {")"}
              </span>
              <p className="font-semibold bg-red-500 text-white px-2 py-1">
                Hot & New
              </p>
            </p>
            <p className="relative inline-block font-semibold text-xl">
              <span className="absolute top-[-28%] right-[-12%]">₫</span>
              <span>14.000.000</span>
            </p>
          </div>
        </div>
        <h1 className="text-purple-600 text-3xl font-bold">
          Các khóa học về {searchParam.get("ten")}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {listKhoaHoc.map((item) => {
            return <KhoaHocCard item={item} key={item.maKhoaHoc} />;
          })}
        </div>
      </div>
    </>
  );
};

export default DanhMucKhoaHoc;
