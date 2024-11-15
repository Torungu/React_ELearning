import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getLocalStorage } from "../../utils/utils";
import { khoaHocService } from "../../service/khoaHoc.service";
import { NotificationContext } from "../../App";
import { Menu, Rate } from "antd";
import ShowMoreLess from "../../components/ShowMoreLess/ShowMoreLess";
import { LoremIpsum } from "lorem-ipsum";
import KhoaHocCard from "../../components/KhoaHocCard/KhoaHocCard";

const ChiTietKhoaHoc = () => {
  // const { showNotification } = useContext(NotificationContext);
  const [searchParam, setSearchParam] = useSearchParams();
  const [chiTietKhoaHoc, setChiTietKhoaHoc] = useState([]);
  const [listKhoaHoc, setListKhoaHoc] = useState([]);

  // const [duLieuDangKy, setDuLieuDangKy] = useState({
  //   maKhoaHoc: "",
  //   taiKhoan: "",
  // });
  // let maKhoaHoc = searchParam.get("maKhoaHoc");
  // let taiKhoan = getLocalStorage("user").taiKhoan;
  // let token = getLocalStorage("user").accessToken;
  // let duLieuDangKy = { maKhoaHoc, taiKhoan };
  const navigate = useNavigate();
  // const handleSignUpCourse = () => {
  //   let maKhoaHoc = searchParam.get("maKhoaHoc");
  //   let taiKhoan = getLocalStorage("user").taiKhoan;
  //   let token = getLocalStorage("user").accessToken;
  //   setDuLieuDangKy({
  //     maKhoaHoc,
  //     taiKhoan,
  //   });
  //   khoaHocService
  //     .dangKyKhoaHocUser(token, duLieuDangKy)
  //     .then((res) => {
  //       showNotification(
  //         "Đăng ký thành công, vui lòng kiểm tra thông tin khóa đã đăng ký",
  //         "success"
  //       );
  //       navigate("/user-info");
  //     })
  //     .catch((err) => {
  //       showNotification(err.response.data, "error");
  //     });
  // };

  useEffect(() => {
    let maKhoaHoc = searchParam.get("maKhoaHoc");
    khoaHocService
      .layChiTietKhoaHocTheoMa(maKhoaHoc)
      .then((res) => {
        setChiTietKhoaHoc(res.data);
        khoaHocService
          .layKhoaHocTheoDanhMuc(res.data.danhMucKhoaHoc.maDanhMucKhoahoc)
          .then((res) => {
            setListKhoaHoc(res.data);
          })
          .catch((err) => {});
      })
      .catch((err) => {});
  }, [searchParam.get("maKhoaHoc")]);

  const items = [
    {
      key: "sub1",
      label: (
        <h1 className="uppercase font-semibold text-xl">
          mục 1: giới thiệu khóa học
        </h1>
      ),
      children: [
        {
          key: "1",
          label: (
            <div className="grid grid-cols-12 items-center border-b-2 w-full">
              <i className="fa-regular fa-file text-center col-span-1"></i>
              <p className="col-span-10">Lesson 1</p>
              <div className="flex items-center gap-1 font-semibold col-span-1">
                <i class="fa-solid fa-clock text-purple-500"></i>
                <p className="">00:07</p>
              </div>
            </div>
          ),
        },
        {
          key: "2",
          label: (
            <div className="grid grid-cols-12 items-center border-b-2 w-full">
              <i className="fa-regular fa-file text-center col-span-1"></i>
              <p className="col-span-10">Lesson 2</p>
              <div className="flex items-center gap-1 font-semibold col-span-1">
                <i class="fa-solid fa-clock text-purple-500"></i>
                <p className="">00:14</p>
              </div>
            </div>
          ),
        },
        {
          key: "3",
          label: (
            <div className="grid grid-cols-12 items-center border-b-2 w-full">
              <i className="fa-solid fa-film col-span-1 text-center"></i>
              <p className="col-span-10">Video 1</p>
              <div className="flex items-center gap-1 font-semibold col-span-1">
                <i class="fa-solid fa-clock text-purple-500"></i>
                <p className="">12:30</p>
              </div>
            </div>
          ),
        },
        {
          key: "4",
          label: (
            <div className="grid grid-cols-12 items-center border-b-2 w-full">
              <i className="fa-solid fa-film col-span-1 text-center"></i>
              <p className="col-span-10">Video 2</p>
              <div className="flex items-center gap-1 font-semibold col-span-1">
                <i class="fa-solid fa-clock text-purple-500"></i>
                <p className="">24:50</p>
              </div>
            </div>
          ),
        },
        {
          key: "5",
          label: (
            <div className="grid grid-cols-12 items-center border-b-2 w-full">
              <i className="fa-solid fa-film col-span-1 text-center"></i>
              <p className="col-span-10">Video 3</p>
              <div className="flex items-center gap-1 font-semibold col-span-1">
                <i class="fa-solid fa-clock text-purple-500"></i>
                <p className="">35:25</p>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      type: "divider",
    },
    {
      key: "sub2",
      label: (
        <h1 className="uppercase font-semibold text-xl">
          mục 2: kiến thức cơ bản
        </h1>
      ),
      children: [
        {
          key: "6",
          label: (
            <div className="grid grid-cols-12 items-center border-b-2 w-full">
              <i className="fa-regular fa-file text-center col-span-1"></i>
              <p className="col-span-10">Lesson 3</p>
              <div className="flex items-center gap-1 font-semibold col-span-1">
                <i class="fa-solid fa-clock text-purple-500"></i>
                <p className="">00:07</p>
              </div>
            </div>
          ),
        },
        {
          key: "7",
          label: (
            <div className="grid grid-cols-12 items-center border-b-2 w-full">
              <i className="fa-regular fa-circle-question col-span-1 text-center"></i>
              <p className="col-span-10">Test 1</p>
              <div className="flex items-center gap-1 font-semibold col-span-1">
                <i class="fa-solid fa-clock text-purple-500"></i>
                <p className="">00:14</p>
              </div>
            </div>
          ),
        },
        {
          key: "8",
          label: (
            <div className="grid grid-cols-12 items-center border-b-2 w-full">
              <i className="fa-solid fa-film col-span-1 text-center"></i>
              <p className="col-span-10">Video 4</p>
              <div className="flex items-center gap-1 font-semibold col-span-1">
                <i class="fa-solid fa-clock text-purple-500"></i>
                <p className="">12:30</p>
              </div>
            </div>
          ),
        },
        {
          key: "9",
          label: (
            <div className="grid grid-cols-12 items-center border-b-2 w-full">
              <i className="fa-regular fa-circle-question col-span-1 text-center"></i>
              <p className="col-span-10">Test 2</p>
              <div className="flex items-center gap-1 font-semibold col-span-1">
                <i class="fa-solid fa-clock text-purple-500"></i>
                <p className="">24:50</p>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      type: "divider",
    },
    {
      key: "sub3",
      label: (
        <h1 className="uppercase font-semibold text-xl">
          mục 3: kiến thức nâng cao
        </h1>
      ),
      children: [
        {
          key: "10",
          label: (
            <div className="grid grid-cols-12 items-center border-b-2 w-full">
              <i className="fa-regular fa-file text-center col-span-1"></i>
              <p className="col-span-10">Lesson 4</p>
              <div className="flex items-center gap-1 font-semibold col-span-1">
                <i class="fa-solid fa-clock text-purple-500"></i>
                <p className="">00:07</p>
              </div>
            </div>
          ),
        },
        {
          key: "11",
          label: (
            <div className="grid grid-cols-12 items-center border-b-2 w-full">
              <i className="fa-solid fa-film col-span-1 text-center"></i>
              <p className="col-span-10">Video 5</p>
              <div className="flex items-center gap-1 font-semibold col-span-1">
                <i class="fa-solid fa-clock text-purple-500"></i>
                <p className="">24:14</p>
              </div>
            </div>
          ),
        },
        {
          key: "12",
          label: (
            <div className="grid grid-cols-12 items-center border-b-2 w-full">
              <i className="fa-solid fa-film col-span-1 text-center"></i>
              <p className="col-span-10">Video 6</p>
              <div className="flex items-center gap-1 font-semibold col-span-1">
                <i class="fa-solid fa-clock text-purple-500"></i>
                <p className="">12:30</p>
              </div>
            </div>
          ),
        },
        {
          key: "13",
          label: (
            <div className="grid grid-cols-12 items-center border-b-2 w-full">
              <i className="fa-regular fa-circle-question col-span-1 text-center"></i>
              <p className="col-span-10">Test 3</p>
              <div className="flex items-center gap-1 font-semibold col-span-1">
                <i class="fa-solid fa-clock text-purple-500"></i>
                <p className="">10:00</p>
              </div>
            </div>
          ),
        },
      ],
    },
  ];

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  // console.log(chiTietKhoaHoc.danhMucKhoaHoc?.maDanhMucKhoahoc);
  return (
    <>
      <div className="space-y-8 py-5 ">
        <div className="bg-purple-100 pt-28 pb-5">
          <div className="container mx-auto space-y-3 ">
            <h1 className="text-3xl font-semibold ">
              {chiTietKhoaHoc?.tenKhoaHoc}
            </h1>
            <div className="flex items-center gap-16">
              <div className="flex items-center gap-3">
                <div className="flex justify-start items-center gap-4">
                  <img
                    src="../../../public/Elon_Musk.jpg"
                    alt=""
                    className="w-10 h-10 rounded-full object-cover object-top"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-purple-400">Người tạo</h4>
                    <p>{chiTietKhoaHoc?.nguoiTao?.hoTen}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-graduation-cap text-3xl"></i>
                <div className="flex flex-col">
                  <h4 className="text-purple-400">Lĩnh vực</h4>
                  <p>{chiTietKhoaHoc?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p className="bg-yellow-200 px-2 py-1 rounded-md">Top Seller</p>
              <p className="flex items-center gap-3 text-lg text-yellow-500">
                4.3{" "}
                <Rate disabled defaultValue={4} className="text-yellow-500" />
              </p>
              <p className="text-gray-500 underline">
                {"(Lượt xem: "}
                {chiTietKhoaHoc?.luotXem}
                {")"}
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-12 gap-5">
          <div className="col-span-8 space-y-5 ">
            <div className="border p-5 space-y-5 ">
              <h1 className="text-xl font-semibold">Những gì bạn sẽ học</h1>
              <ul className="grid grid-cols-2 grid-rows-3 gap-x-6 gap-y-4">
                <li>
                  <i className="fa-solid fa-check pe-2 text-purple-600"></i>
                  Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân thiện với
                  người dùng và phản ứng nhanh
                </li>
                <li>
                  <i className="fa-solid fa-check pe-2 text-purple-600"></i>
                  Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận dụng
                  sức mạnh của JavaScript một cách dễ dàng
                </li>
                <li>
                  <i className="fa-solid fa-check pe-2 text-purple-600"></i>Tìm
                  hiểu tất cả về React Hooks và React Components
                </li>
                <li>
                  <i className="fa-solid fa-check pe-2 text-purple-600"></i>
                  Thông thạo chuỗi công cụ hỗ trợ React, bao gồm cú pháp
                  Javascript NPM, Webpack, Babel và ES6 / ES2015
                </li>
                <li>
                  <i className="fa-solid fa-check pe-2 text-purple-600"></i>
                  Nhận ra sức mạnh của việc xây dựng các thành phần có thể kết
                  hợp
                </li>
                <li>
                  <i className="fa-solid fa-check pe-2 text-purple-600"></i>
                  Hãy là kỹ sư giải thích cách hoạt động của Redux cho mọi
                  người, bởi vì bạn biết rất rõ các nguyên tắc cơ bản
                </li>
              </ul>
            </div>
            <div className="space-y-5">
              <h1 className="text-xl font-semibold">Nội dung khóa học</h1>
              <Menu
                style={{
                  width: "100%",
                  border: "none",
                }}
                mode="inline"
                items={items}
              />
            </div>
            <div className="space-y-5">
              <h1 className="text-xl font-semibold">Yêu cầu</h1>
              <ul className="list-disc container mx-[5%] space-y-2">
                <li>Có kiến thức cơ bản về IT tuy nhiên không bắt buộc.</li>
                <li>
                  Bạn không cần phải biết code vì tất cả code mẫu được cung cấp
                  bởi giảng viên.
                </li>
                <li>
                  Những bạn có kiến thức cơ bản về server như Linux, Windows có
                  khả năng sẽ học nhanh hơn.
                </li>
              </ul>
            </div>
            <div className="space-y-5">
              <h1 className="text-xl font-semibold">Mô tả</h1>
              <ShowMoreLess
                text={lorem.generateWords(100)}
                tenGV={chiTietKhoaHoc?.nguoiTao?.hoTen}
                tenKhoaHoc={chiTietKhoaHoc?.tenKhoaHoc}
              />
            </div>
            <div className="space-y-5">
              <h1 className="text-xl font-semibold">Giảng viên</h1>
              <div>
                <h2 className="text-purple-800 font-bold underline">
                  {chiTietKhoaHoc?.nguoiTao?.hoTen}
                </h2>
                <h3 className="text-gray-400">Software Engineer</h3>
              </div>
              <div className="flex items-center gap-10">
                <img
                  src="../../../public/Elon_Musk.jpg"
                  alt=""
                  className="w-28 h-28 rounded-full object-cover object-top"
                />
                <ul className="space-y-1">
                  <li className="grid grid-cols-10 items-center gap-3">
                    <i className="fa-solid fa-star col-span-1 text-purple-700"></i>
                    <span className="col-span-9">4.5 Đánh giá</span>
                  </li>
                  <li className="grid grid-cols-10 items-center gap-3">
                    <i className="fa-solid fa-medal cols-span-1 text-purple-700"></i>
                    <span className="col-span-9">367 Lượt xem</span>
                  </li>
                  <li className="grid grid-cols-10 items-center gap-3">
                    <i className="fa-solid fa-user-group cols-span-1 text-purple-700"></i>
                    <span className="col-span-9">1780 Học viên</span>
                  </li>
                  <li className="grid grid-cols-10 items-center gap-3">
                    <i className="fa-solid fa-circle-play cols-span-1 text-purple-700"></i>
                    <span className="col-span-9">4 Khóa học</span>
                  </li>
                </ul>
              </div>
              <ShowMoreLess
                text={lorem.generateWords(100)}
                tenGV={chiTietKhoaHoc?.nguoiTao?.hoTen}
                tenKhoaHoc={chiTietKhoaHoc?.tenKhoaHoc}
              />
            </div>
            <div className="flex items-center gap-2 text-xl">
              <i className="fa-solid fa-star text-yellow-400"></i>
              <p className="font-bold">4.3 Đánh giá</p>
              <i class="fa-solid fa-circle text-[6px] text-gray-400"></i>
              <p className="font-bold">{chiTietKhoaHoc?.luotXem} Lượt xem</p>
            </div>
          </div>
          <div className="col-span-4">
            <div className="border w-full p-5 space-y-5 bg-white h-fit sticky top-[20%]">
              <img
                src={chiTietKhoaHoc?.hinhAnh}
                alt="err"
                className="w-full h-[150px] object-cover border rounde"
              />
              <div className="space-y-1">
                <div className="flex gap-8 items-center">
                  <div className="relative inline-block">
                    <span className="absolute top-[-28%] right-[-10%] text-lg font-semibold">
                      ₫
                    </span>
                    <span className="text-xl font-semibold">1.800.000</span>
                  </div>
                  <div className="relative inline-block line-through text-gray-500">
                    <span className="absolute top-[-28%] right-[-10%]">₫</span>
                    <span className="">3.000.000</span>
                  </div>
                </div>
                <p className="text-red-600">
                  <i className="fa-regular fa-clock"></i> 8 hours left to get up
                  to 60% off
                </p>
              </div>
              <button
                className="button-pink border-transparent w-full font-bold"
                onClick={() => {
                  getLocalStorage("user")
                    ? handleSignUpCourse()
                    : navigate("/login");
                }}
              >
                ĐĂNG KÝ
              </button>
              <div className="border-y py-4">
                <p className="font-bold text-xl mb-2">Khóa học gồm :</p>
                <ul className="space-y-2 text-[0.9rem] text-gray-700">
                  <li className="grid grid-cols-10 items-center">
                    <i className="fa-solid fa-film col-span-1 text-center"></i>
                    <span className="col-span-9">25 Video theo yêu cầu</span>
                  </li>
                  <li className="grid grid-cols-10 items-center">
                    <i className="fa-regular fa-circle-question col-span-1 text-center"></i>
                    <span className="col-span-9">4 Bài kiểm tra thực hành</span>
                  </li>
                  <li className="grid grid-cols-10 items-center">
                    <i className="fa-regular fa-file col-span-1 text-center"></i>
                    <span className="col-span-9">8 Bài viết</span>
                  </li>
                  <li className="grid grid-cols-10 items-center">
                    <i className="fa-solid fa-file-arrow-down col-span-1 text-center"></i>
                    <span className="col-span-9">6 Tài nguyên</span>
                  </li>
                  <li className="grid grid-cols-10 items-center">
                    <i className="fa-solid fa-infinity col-span-1 text-center"></i>
                    <span className="col-span-9">Quyền truy cập trọn đời</span>
                  </li>
                  <li className="grid grid-cols-10 items-center">
                    <i className="fa-solid fa-trophy col-span-1 text-center"></i>
                    <span className="col-span-9">Giấy chứng nhận</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-green-600 font-semibold">
                  <i className="fa-solid fa-tags"></i> Mã coupon khuyến mãi
                </p>
                <input
                  type="text"
                  placeholder="Nhập mã"
                  className="border-green-600 border w-full p-2 outline-none text-green-600 placeholder-green-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto space-y-5 ">
          <h1 className="text-xl font-semibold">
            Các khóa học {chiTietKhoaHoc?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}{" "}
            khác
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {listKhoaHoc?.slice(0, 4).map((item) => {
              return <KhoaHocCard item={item} key={item.maKhoaHoc} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChiTietKhoaHoc;
