import React, { useEffect, useState } from "react";
import { Dropdown, Space } from "antd";
import { NavLink } from "react-router-dom";

const CourseMenu = ({ valueDanhMuc }) => {
  const items = valueDanhMuc.map((item, index) => ({
    label: (
      <NavLink
        to={`/danh-muc-khoa-hoc?maDanhMuc=${item?.maDanhMuc}&ten=${item?.tenDanhMuc}&MaNhom=GP01`}
      >
        {item?.tenDanhMuc}
      </NavLink>
    ),
    key: { index },
  }));

  return (
    // <div className="menuDanhMuc">
    <div>
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <button
          className="py-2 px-2 bg-transparent flex items-center"
          onClick={(e) => e.preventDefault()}
        >
          <i className="fa-solid fa-bars me-3 text-white text-md" />
          <p className="text-white uppercase">Danh mục khóa học</p>
        </button>
      </Dropdown>
    </div>
  );
};

export default CourseMenu;
