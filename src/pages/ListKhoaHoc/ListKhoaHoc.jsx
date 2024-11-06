import React, { useEffect, useState } from "react";
import { khoaHocService } from "../../service/khoaHoc.service";
import KhoaHocCard from "../../components/KhoaHocCard/KhoaHocCard";

const ListKhoaHoc = () => {
  const [listKhoaHoc, setListKhoaHoc] = useState([]);
  useEffect(() => {
    khoaHocService
      .layAllKhoaHoc()
      .then((res) => {
        // console.log(res.data);
        setListKhoaHoc(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    // <div className="listKhoaHoc">
    <>
      {/* <div className='container py-10 xs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[1140px]' data-aos="fade-up"> */}
      <div className="container mx-auto space-y-10" data-aos="fade-up">
        <h1 className="font-bold text-3xl text-purple-600 ">
          Các khóa học mới nhất
        </h1>
        {/* <div className="xs:block md:grid-cols-2 md:grid lg:grid lg:grid-cols-3 gap-16 mx-auto"> */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  ">
            {listKhoaHoc.splice(0, 8).map((item) => {
              return <KhoaHocCard item={item} key={item.maKhoaHoc} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListKhoaHoc;
