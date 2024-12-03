import React, { useContext } from "react";
import { Menu } from "antd";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { path } from "../../common/path";
import { useDispatch, useSelector } from "react-redux";
import { NotificationContext } from "../../App";
import { userStatus } from "../../redux/userSlice";

const CourseMenuMobile = ({ valueDanhMuc, onClose }) => {
  const { infoUser } = useSelector((state) => state.userSlice);
  const { showNotification } = useContext(NotificationContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkUserLogin = () => {
    return infoUser ? (
      <button className="text-purple-700 underline font-bold">
        <Link to={path.userInfo}>Thông tin cá nhân</Link>
      </button>
    ) : (
      <button className="text-purple-700 underline font-bold">
        <Link to={"/login"}>Đăng nhập</Link>
      </button>
    );
  };

  const items = [
    {
      key: "sub1",
      label: (
        <div className="font-bold">
          <Link>DANH MỤC</Link>
        </div>
      ),
      children: valueDanhMuc.map((item, index) => ({
        key: index + 1,
        label: (
          <NavLink
            to={`/danh-muc-khoa-hoc?maDanhMuc=${item?.maDanhMuc}&ten=${item?.tenDanhMuc}&MaNhom=GP01`}
            className={`font-semibold hover:text-purple-800 duration-300 danh-muc`}
          >
            {item?.tenDanhMuc}
          </NavLink>
        ),
      })),
    },
    {
      key: "sub2",
      label: (
        <div className="font-bold">
          <Link>BLOG</Link>
        </div>
      ),
    },
    {
      key: "sub3",
      label: (
        <div className="font-bold">
          <Link>SỰ KIỆN</Link>
        </div>
      ),
    },
    {
      key: "sub4",
      label: (
        <div className="font-bold">
          <Link>THÔNG TIN</Link>
        </div>
      ),
    },
    {
      key: "sub5",
      label: checkUserLogin(),
    },
    {
      key: "sub6",
      label: infoUser ? (
        <Link
          to={path.homePage}
          className="absolute right-6 top-0 text underline font-semibold"
          onClick={() => {
            dispatch(userStatus(null));
            localStorage.removeItem("user");
            showNotification("Đăng xuất thành công", "info");
            onClose(false);
          }}
        >
          Đăng xuất
        </Link>
      ) : (
        <></>
      ),
    },
  ];

  return (
    <>
      <Menu
        style={{
          width: "100%",
          border: "none",
        }}
        defaultSelectedKeys={["0"]}
        // defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </>
  );
};

export default CourseMenuMobile;
