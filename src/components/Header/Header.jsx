import React, { useEffect, useState } from "react";
import LogoIcon from "../Icon/LogoIcon";
import { Link, useNavigate } from "react-router-dom";
import FormSearchKhoaHoc from "../Form/FormSearchKhoaHoc";
import CourseMenu from "../Menu/CourseMenu";
import WrapperSuggestCourse from "../Wrapper/WrapperSuggestCourse";
import MobileMenu from "../Menu/MobileMenu";
import { Avatar, Dropdown, Drawer } from "antd";
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
  const [showSearch, setShowSearch] = useState(false);
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
            className="text-purple-700 border-2 border-purple-700 hover:text-white hover:bg-purple-700  rounded-md p-2 sm:text-white sm:border-white sm:hover:bg-white sm:hover:text-purple-700 duration-300"
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

  const toggleSearchForm = () => {
    setShowSearch((prevState) => !prevState);
  };

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <header>
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* <nav className="header_main sm:text-xs md:text-sm lg:text-base tiny:!hidden sm:!block"> */}
            <div className="flex items-center gap-10">
              <Link to={path.homePage}>
                <LogoIcon />
              </Link>
              <div className="hidden lg:block">
                <WrapperSuggestCourse>
                  <FormSearchKhoaHoc />
                </WrapperSuggestCourse>
              </div>
            </div>
            <div className="block lg:hidden">
              <div className="flex items-center gap-5">
                <button onClick={toggleSearchForm}>
                  <i class="fa-solid fa-magnifying-glass text-white border-2 rounded-full p-2"></i>
                </button>
                <div className="block md:hidden">
                  <button type="primary" onClick={showDrawer}>
                    <i className="fa-solid fa-bars me-3 text-white text-md" />
                  </button>
                  <Drawer onClose={onClose} open={open}>
                    <div className="uppercase flex flex-col items-center header_group_menu">
                      <Link className="hover:text-purple-400 duration-300 p-2">
                        blog
                      </Link>
                      <Link className="hover:text-purple-400 duration-300 p-2">
                        sự kiện
                      </Link>
                      <Link className="hover:text-purple-400 duration-300 p-2">
                        thông tin
                      </Link>
                      <div className="">{checkUserLogin()}</div>
                    </div>
                  </Drawer>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="uppercase text-white flex items-center header_group_menu">
                <div className="header_item">
                  <CourseMenu valueDanhMuc={valueDanhMuc} />
                </div>
                <Link className="hover:text-purple-400 duration-300 p-2">
                  blog
                </Link>
                <Link className="hover:text-purple-400 duration-300 p-2">
                  sự kiện
                </Link>
                <Link className="hover:text-purple-400 duration-300 p-2">
                  thông tin
                </Link>
                <div className="">{checkUserLogin()}</div>
              </div>
            </div>
          </div>
          {/* <MobileMenu valueDanhMuc={valueDanhMuc} /> */}
          {/* <MobileMenuGlass valueDanhMuc={valueDanhMuc} /> */}
        </div>
        {showSearch && (
          <div className="container mx-auto py-2">
            <WrapperSuggestCourse>
              <FormSearchKhoaHoc />
            </WrapperSuggestCourse>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
