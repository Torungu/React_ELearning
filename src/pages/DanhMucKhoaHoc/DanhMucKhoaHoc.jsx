import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { khoaHocService } from "../../service/khoaHoc.service";
import { getLocalStorage, truncateText } from "../../utils/utils";
import KhoaHocCard from "../../components/KhoaHocCard/KhoaHocCard";
import { Tabs } from "antd";
import Slider from "react-slick";

const DanhMucKhoaHoc = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [listKhoaHoc, setListKhoaHoc] = useState([]);
  const items = [
    {
      key: "1",
      label: <h1 className="font-semibold text-purple-500">Phổ biến</h1>,
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: <h1 className="font-semibold text-purple-500">Xu hướng</h1>,
      children: "Content of Tab Pane 2",
    },
  ];
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: (
      <div className="inline-block text-black">
        <i className="fa-solid fa-chevron-right text-black"></i>
      </div>
    ),
    prevArrow: <i className="fa-solid fa-chevron-left text-black"></i>,
  };

  useEffect(() => {
    let maDanhMuc = searchParam.get("maDanhMuc");
    khoaHocService
      .layKhoaHocTheoDanhMuc(maDanhMuc)
      .then((res) => {
        console.log(res.data);
        setListKhoaHoc(res.data);
      })
      .catch((err) => {});
  }, [searchParam.get("maDanhMuc"), searchParam.get("ten")]);

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
      <div className="container mx-auto">
        <Tabs defaultActiveKey="1" items={items} />
        <div className="slider-container py-10">
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>7</h3>
            </div>
            <div>
              <h3>8</h3>
            </div>
            <div>
              <h3>9</h3>
            </div>
          </Slider>
        </div>
        {/* <h1 className="font-semibold py-5 text-purple-500">
          Các khóa học phổ biến <i className="fa-solid fa-star"></i>
        </h1> */}
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
