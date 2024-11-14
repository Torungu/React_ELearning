import React from "react";
import { useState } from "react";

const ShowMoreLess = ({ text, maxLength = 150, tenKhoaHoc, tenGV }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedText = isExpanded ? text : text.slice(0, maxLength);
  const toggleText = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div className="space-y-2">
      <h1 className="font-semibold">
        Chào mừng đến với khóa học {tenKhoaHoc} của giảng viên {tenGV}
      </h1>
      <h2 className="uppercase font-semibold">Giới thiệu giảng viên</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
        consequatur soluta dolor blanditiis ut odit excepturi, recusandae
        laudantium nostrum. Nemo provident fuga error obcaecati ipsam ipsa
        optio, commodi aspernatur quos sequi earum quasi assumenda fugiat
        pariatur minima incidunt explicabo ratione?
      </p>
      <h2 className="font-semibold">Về khóa học {tenKhoaHoc}</h2>
      <p>
        {displayedText}
        {!isExpanded && text.length > maxLength && "..."}
      </p>
      {text.length > maxLength && (
        <button
          onClick={toggleText}
          // style={{ color: "blue", cursor: "pointer", fontWeight: "bold" }}
          className="text-purple-800 font-semibold"
        >
          {isExpanded ? (
            <>
              Show less <i className="fa-solid fa-angle-up"></i>
            </>
          ) : (
            <>
              Show more <i className="fa-solid fa-angle-down"></i>
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default ShowMoreLess;
