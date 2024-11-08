import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { khoaHocService } from "../../service/khoaHoc.service";
import { getLocalStorage, truncateText } from "../../utils/utils";
import KhoaHocCard from "../../components/KhoaHocCard/KhoaHocCard";

const DanhMucKhoaHoc = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [listKhoaHoc, setListKhoaHoc] = useState([]);
  useEffect(() => {
    let maDanhMuc = searchParam.get("maDanhMuc");
    khoaHocService
      .layKhoaHocTheoDanhMuc(maDanhMuc)
      .then((res) => {
        setListKhoaHoc(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [searchParam.get("maDanhMuc"), searchParam.get("ten")]);

  return (
    <>
      <div className="text-center pt-24 pb-4 sm:pt-28 sm:pb-10 bg-purple-200">
        <h1 className="text-[#211C5B] font-bold text-xl sm:text-3xl uppercase">
          {searchParam.get("ten")}
        </h1>
      </div>
      <div className="container mx-auto pb-20 pt-5 px-2">
        <h1 className="font-semibold py-5 text-purple-500">
          Các khóa học phổ biến <i className="fa-solid fa-star"></i>
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
