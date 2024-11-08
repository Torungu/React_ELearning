import React, { useState } from "react";
import { Menu } from "antd";
import { Link, NavLink } from "react-router-dom";

const CourseMenuMobile = ({ valueDanhMuc }) => {
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
      label: (
        <button className="text-purple-700 underline font-bold">
          <Link to={"/login"}>Đăng nhập</Link>
        </button>
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
