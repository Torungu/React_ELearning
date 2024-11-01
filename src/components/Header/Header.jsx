import React, { useEffect, useState } from "react";
import LogoIcon from "../Icon/LogoIcon";
import { Link, useNavigate } from "react-router-dom";
import FormSearchKhoaHoc from "../Form/FormSearchKhoaHoc";
import CourseMenu from "../Menu/CourseMenu";
import WrapperSuggestCourse from "../Wrapper/WrapperSuggestCourse";
import MobileMenu from "../Menu/MobileMenu";
import { Avatar, Dropdown } from "antd";
import UserIcon from "../Icon/UserIcon";
import LogOutIcon from "../Icon/LogOutIcon";
import { path } from "../../common/path";
import { useDispatch, useSelector } from "react-redux";
import { userStatus } from "../../redux/userSlice";
import { khoaHocService } from "../../service/khoaHoc.service";
import MobileMenuGlass from "../Menu/MobileMenuGlass";

const Header = () => {
  const { infoUser } = useSelector((state) => state.userSlice);
  const [valueDanhMuc, setValueDanhMuc] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    khoaHocService
      .layAllDanhMucKhoaHoc()
      .then((res) => {
        setValueDanhMuc(res.data);
      })
      .catch(() => {
        console.log(err);
      });
  }, []);

  const items = [
    {
      label: (
        <Link
          to={path.userInfo}
          className="flex space-x-2 items-center font-bold"
        >
          <UserIcon />
          <span>Thông tin cá nhân</span>
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link
          to={path.homePage}
          className="flex space-x-2 items-center font-bold text-[#4054B2]"
          onClick={() => {
            dispatch(userStatus(null));
            localStorage.removeItem("user");
          }}
        >
          <LogOutIcon />
          <span>Đăng xuất</span>
        </Link>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
  ];

  const checkUserLogin = () => {
    return infoUser ? (
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <Avatar
          className="cursor-pointer hover:bg-[#DEBE4C] duration-200"
          size={30}
          shape="square"
        >
          {infoUser?.hoTen.charAt(0)}
        </Avatar>
      </Dropdown>
    ) : (
      <>
        <div className="flex items-center justify-between gap-5">
          <Link
            className="text-white border-2 rounded-md p-2 hover:bg-white hover:text-purple-700 duration-300"
            to={"/login"}
          >
            Đăng nhập
          </Link>
          {/* <Link className="text-white border-2 rounded-md p-2" to={"/sign-up"}>
            Đăng ký
          </Link> */}
        </div>
      </>
    );
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="flex items-center justify-between">
            {/* <nav className="header_main sm:text-xs md:text-sm lg:text-base tiny:!hidden sm:!block"> */}
            <div className="flex items-center gap-8">
              <Link to={path.homePage}>
                <LogoIcon />
              </Link>
              <WrapperSuggestCourse>
                <FormSearchKhoaHoc />
              </WrapperSuggestCourse>
            </div>
            <div className="uppercase text-white flex items-center gap-5 header_group_menu">
              <div className="header_item hover:scale-105 duration-300">
                <CourseMenu valueDanhMuc={valueDanhMuc} />
              </div>
              <Link className="hover:scale-105 hover:text-purple-300 duration-300">
                Khóa học
              </Link>
              <Link className="hover:scale-105 hover:text-purple-300 duration-300">
                blog
              </Link>
              <Link className="hover:scale-105 hover:text-purple-300 duration-300">
                sự kiện
              </Link>
              <Link className="hover:scale-105 hover:text-purple-300 duration-300">
                thông tin
              </Link>
            </div>
            <div className="flex items-center justify-between ">
              <div className="">{checkUserLogin()}</div>
            </div>
          </div>
          {/* <MobileMenu valueDanhMuc={valueDanhMuc} /> */}
          <MobileMenuGlass valueDanhMuc={valueDanhMuc} />
        </div>
      </header>
    </>
  );
};

export default Header;
