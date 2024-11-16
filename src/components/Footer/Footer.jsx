import React, { useEffect, useState } from "react";
import LogoIcon from "../Icon/LogoIcon";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="space-y-5 py-5">
      <div className="container mx-auto">
        <div className="footer_content">
          <div className="footer_subscribe grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div className="space-y-5">
              <h2 className="uppercase font-bold sm:text-lg">
                CyberSoft Academy
              </h2>
              <p>Hệ thống đào tạo lập trình chuyên sâu theo dự án thực tế.</p>
              <p sm:text-lg>
                CyberSoft sẽ gởi các khóa học trực tuyến & các chương trình
                CyberLive hoàn toàn MIỄN PHÍ và các chương trình KHUYẾN MÃI hấp
                dẫn đến các bạn.
              </p>
            </div>
            <div className="space-y-5">
              <h2 className="uppercase font-bold sm:text-lg">
                Đăng ký nhận Ưu đãi & Bài viết mới
              </h2>
              <form className="space-y-5">
                <input type="email" placeholder="Email liên hệ" />
                <input type="text" placeholder="Điện thoại liên hệ" />
                <button
                  className="border-transparent"
                  // onClick={() =>
                  //   (window.location.href =
                  //     "https://www.facebook.com/lophocviet/")
                  // }
                >
                  TƯ VẤN & ĐĂNG KÝ HỌC
                </button>
              </form>
            </div>
            <div className="footer_advisory space-y-5">
              <h2 className="uppercase font-bold sm:text-lg">
                Địa chỉ liên hệ
              </h2>
              <ul className="space-y-5">
                <li>
                  <i className="fa-solid fa-location-dot" />
                  Cơ sở 1: 112 Cao Thắng, Quận 3
                </li>
                <li>
                  <i className="fa-solid fa-location-dot" />
                  Cơ sở 2: 124 Điện Biên Phủ, Quận 1
                </li>
                {/* <li>
                  <i className="fa-solid fa-location-dot" />
                  Cơ sở 3: P3-00.05 Chung cư Cityland Park Hills, Phường 10,
                  Quận Gò Vấp
                </li>
                <li>
                  <i className="fa-solid fa-location-dot" />
                  Cơ sở 4: 6C Đường số 8, Linh Tây, Thủ Đức (gần ĐH Cảnh Sát)
                </li> */}
                <li>
                  <i className="fa-solid fa-location-dot" />
                  Cơ sở 3: 103 Nguyễn Hữu Dật, Hải Châu
                </li>
                <li>
                  <i className="fa-solid fa-phone" />
                  096.105.1014 - 098.407.5835
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="footer_social mb-3 xs:hidden sm:block">
              <iframe width="340px" height="325px" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameBorder={0} allowtransparency="true" allowFullScreen={true} scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.12/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dff0b361a589b4b941%26domain%3Dcybersoft.edu.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fcybersoft.edu.vn%252Ffda70356ffd3af6a5%26relation%3Dparent.parent&container_width=360&height=325&hide_cover=false&hide_cta=false&href=https%3A%2F%2Fwww.facebook.com%2Flophocviet%2F&locale=vi_VN&sdk=joey&show_facepile=false&small_header=false&tabs=timeline&width=340" style={{ border: 'none', visibility: 'visible', width: 340, height: 325 }} data-gtm-yt-inspected-11="true" />
            </div> */}
        </div>
      </div>
      <div className="border-t pt-3">
        <div className="container mx-auto sm:flex items-center justify-between space-y-3">
          <p className="flex items-center gap-5">
            <LogoIcon w="180px" h="50%" />
            <span>&copy; 2024. CyberSoft</span>
          </p>
          <div>
            <ul className="flex items-center gap-5">
              <li>
                <i className="fa-brands fa-facebook-f border rounded-full h-8 w-8 text-center place-content-center hover:text-purple-500 hover:bg-white duration-300 cursor-pointer"></i>
              </li>
              <li>
                <i className="fa-brands fa-twitter border rounded-full h-8 w-8 text-center place-content-center hover:text-purple-500 hover:bg-white duration-300 cursor-pointer"></i>
              </li>
              <li>
                <i className="fa-brands fa-tiktok border rounded-full h-8 w-8 text-center place-content-center hover:text-purple-500 hover:bg-white duration-300 cursor-pointer"></i>
              </li>
              <li>
                <i className="fa-brands fa-instagram border rounded-full h-8 w-8 text-center place-content-center hover:text-purple-500 hover:bg-white duration-300 cursor-pointer"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
