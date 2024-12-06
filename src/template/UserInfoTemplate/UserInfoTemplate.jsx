import React, { useContext, useEffect, useState } from "react";
import { Tabs } from "antd";
import { useFormik } from "formik";
import InputCustom from "../../components/Input/InputCustom";
import utils, { getLocalStorage, setLocalStorage } from "../../utils/utils";
import { userService } from "../../service/user.service";
import { khoaHocService } from "../../service/khoaHoc.service";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { NotificationContext } from "../../App";
import { Link } from "react-router-dom";
import { truncateText } from "../../utils/utils";

const UserInfoTemplate = () => {
  const onChange = () => {};
  const { showNotification } = useContext(NotificationContext);
  const [userInfo, setUserInfo] = useState(getLocalStorage("user"));
  const [listKhoaHoc, setListKhoaHoc] = useState([]);
  const { taiKhoan, matKhau, hoTen, email, soDT, accessToken } = userInfo;
  const [listKhoaHocMoi, setListKhoaHocMoi] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [arrFilter, setArrFilter] = useState([]);
  let token = getLocalStorage("user").accessToken;

  const searchTenKhoaHoc = (name) => {
    let txt = utils.removeVietnameseTones(name).trim().toLowerCase();
    let arrSearch = listKhoaHoc.filter((item, index) => {
      let searchName = utils
        .removeVietnameseTones(item.tenKhoaHoc)
        .trim()
        .toLowerCase();
      return searchName.includes(txt);
    });
    setIsSearching(true);
    setArrFilter(arrSearch);
    return arrSearch;
  };

  useEffect(() => {
    //Gọi API Lấy All DS KH
    khoaHocService
      .layAllKhoaHoc()
      .then((res) => {
        setListKhoaHocMoi(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });

    // Gọi API lấy thông tin các khóa học mà user đã đăng ký
    khoaHocService
      .layThongTinKhoaHocUser(accessToken)
      .then((res) => {
        setListKhoaHoc(res.data.chiTietKhoaHocGhiDanh);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  const handleCancelCourse = (maKhoaHoc, taiKhoan) => {
    let data = {
      maKhoaHoc,
      taiKhoan,
    };
    khoaHocService
      .huyGhiDanhUser(getLocalStorage("user").accessToken, data)
      .then((res) => {
        showNotification("Hủy ghi Danh thành công", "success");
        khoaHocService
          .layThongTinKhoaHocUser(accessToken)
          .then((res) => {
            setListKhoaHoc(res.data.chiTietKhoaHocGhiDanh);
          })
          .catch((err) => {
            // console.log(err);
          });
      })
      .catch((err) => {
        // console.log(err);
        showNotification("Có lỗi xảy ra vui lòng liên hệ BP.CSKH", "error");
      });
  };

  const { values, handleChange, handleSubmit, touched, errors } = useFormik({
    initialValues: {
      taiKhoan,
      matKhau,
      hoTen,
      email,
      soDT,
      maNhom: "GP01",
      maLoaiNguoiDung: "HV",
    },
    onSubmit: (values) => {
      userService
        .updateUser(token, values)
        .then((res) => {
          showNotification(`Đã sửa tài khoản ${values.taiKhoan}`, "warning");
          setUserInfo(res.data);
          // setLocalStorage("user", { ...values });
        })
        .catch((err) => {
          // console.log(err);
        });
    },
  });

  const tabItems = [
    {
      label: "Chỉnh sửa thông tin",
      key: "1",
      children: (
        <>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="">
              <InputCustom
                id={"taiKhoan"}
                name={"taiKhoan"}
                labelContent={"Tài khoản"}
                value={values.taiKhoan}
                onChange={handleChange}
                touched={touched.taiKhoan}
                readOnly={true}
              />
            </div>
            <div className="">
              <InputCustom
                id="matKhau"
                name="matKhau"
                labelContent="Mật khẩu"
                value={values.matKhau}
                typeInput="password"
                onChange={handleChange}
                touched={touched.matKhau}
              />
            </div>
            <div className="">
              <InputCustom
                name="hoTen"
                labelContent="Họ và Tên"
                typeInput="text"
                onChange={handleChange}
                value={values.hoTen}
              />
            </div>
            <div className="">
              <InputCustom
                name="email"
                labelContent="Email"
                typeInput="text"
                onChange={handleChange}
                value={values.email}
              />
            </div>
            <div className="">
              <InputCustom
                name="soDT"
                labelContent="Số Điện Thoại"
                onChange={handleChange}
                value={values.soDT}
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="font-bold text-center w-1/2 button-right p-2 border-transparent"
              >
                Cập nhật
              </button>
            </div>
          </form>
        </>
      ),
    },
    {
      label: "Khóa học của tôi",
      key: "2",
      children: (
        <>
          <div className="mx-auto space-y-8">
            <div className="grid grid-cols-2 gap-x-40 gap-y-5">
              <h1 className="text-3xl font-bold mb-5">
                Các lớp học đã tham gia
              </h1>
              <input
                type="text"
                placeholder="Nhập khóa học cần tìm"
                className="border py-2 px-3 rounded-md tiny:w-full"
                onInput={(e) => {
                  if (e.target.value.trim() !== "") {
                    setIsSearching(true);
                    searchTenKhoaHoc(e.target.value);
                  } else {
                    setIsSearching(false);
                  }
                }}
              />
            </div>
            <div className="space-y-5">
              {(isSearching ? arrFilter : listKhoaHoc).map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" tiny:block md:flex flex-row items-center gap-5 bg-purple-200 p-5 rounded-md w-full justify-evenly"
                  >
                    <div className=" tiny:w-full md:w-[150px] mb-3">
                      <img src={item?.hinhAnh} alt="err" className="w-full" />
                    </div>
                    <div className="tiny:w-full md:w-1/2 mb-3">
                      <div className="space-y-5 mb-3">
                        <h2 className="font-bold text-2xl">
                          {item.tenKhoaHoc}
                        </h2>
                        <p>{item.moTa}</p>
                      </div>
                      <div className=" tiny:block md:flex justify-between items-center mb-3 tiny:text-center sm:text-left">
                        <p className="text-purple-700 font-semibold mb-5">
                          ( Lượt xem: {item.luotXem} )
                        </p>
                        <button
                          className="bg-black px-5 py-2 text-white rounded-md mb-3 tiny:w-2/3 sm:w-auto"
                          onClick={() => {
                            handleCancelCourse(item.maKhoaHoc, taiKhoan);
                          }}
                        >
                          Hủy
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <Header />
      <div className="container mx-auto pt-32 pb-10 grid grid-cols-12">
        <div className="space-y-5 col-span-4">
          <h1 className="text-2xl font-bold">Hồ sơ</h1>
          <div className="flex gap-5">
            <img
              src="/public/Elon_Musk.jpg"
              alt=""
              className="rounded-lg w-20 h-20 object-cover object-top"
            />
            <div>
              <h2 className="text-lg font-bold">{values.hoTen}</h2>
              <h3 className="text-sm text-gray-500">#{values.taiKhoan}</h3>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="font-semibold">Liên hệ</h1>
            <ul className="text-gray-500 space-y-1 gap-2">
              <li className="grid grid-cols-10 items-center ">
                <i className="fa-regular fa-envelope col-span-1 text-center"></i>
                <p className="col-span-2">Email:</p>
                <p className="text-black col-span-6">{values.email}</p>
              </li>
              <li className="grid grid-cols-10 items-center">
                <i className="fa-solid fa-mobile-screen col-span-1 text-center"></i>
                <p className="col-span-2">Điện thoại:</p>
                <p className="text-black col-span-6">{values.soDT}</p>
              </li>
            </ul>
          </div>
          <hr className="w-[70%]" />
          <div className="space-y-2">
            <h1 className="font-semibold">Chi tiết học viên</h1>
            <ul className="text-gray-500 space-y-1">
              <li className="grid grid-cols-10 items-center">
                <i className="fa-solid fa-layer-group col-span-1 text-center"></i>
                <p className="col-span-2">Nhóm:</p>
                <p className="text-black col-span-6">{values.maNhom}</p>
              </li>
              <li className="grid grid-cols-10 items-center">
                <i className="fa-solid fa-certificate col-span-1 text-center"></i>
                <p className="col-span-2">Loại:</p>
                <p className="text-black col-span-6">2</p>
              </li>
              <li className="grid grid-cols-10 items-center">
                <i className="fa-solid fa-briefcase col-span-1 text-center"></i>
                <p className="col-span-2">Tình trạng:</p>
                <p className="text-black col-span-6">Còn học</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-8">
          <Tabs onChange={onChange} type="card" items={tabItems} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserInfoTemplate;
