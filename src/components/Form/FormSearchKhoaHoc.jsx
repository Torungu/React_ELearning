import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { path } from "./../../common/path";

const FormSearchKhoaHoc = ({ setOpenDropdown, handleGetValueChildren }) => {
  const [valueSearch, setValueSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!valueSearch) {
      setOpenDropdown(false);
    }
    handleGetValueChildren(valueSearch);
  }, [valueSearch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenDropdown(false);
    navigate(`${path.timKiemKhoaHoc}?tenKhoaHoc=${valueSearch}`);
  };

  const handleChange = (event) => {
    setValueSearch(event.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="outline-none py-2 px-4 rounded-md border-none"
          type="text"
          placeholder="Tìm khóa học"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="p-2 text-sm hidden"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </>
  );
};

export default FormSearchKhoaHoc;
