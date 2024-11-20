import React, { useContext, useState } from "react";
import InputCustom from "../../components/Input/InputCustom";
import { useFormik } from "formik";
import { authService } from "../../service/auth.service";
import Lottie, { useLottie } from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import { path } from "../../common/path";
import { getLocalStorage, setLocalStorage } from "../../utils/utils";
import { NotificationContext } from "../../App";
import animationSignIn from "../../assets/animation/signinAnimation.json";
import animationSignUp from "../../assets/animation/SignUpAnimation.json";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useDispatch } from "react-redux";
import { userStatus } from "../../redux/userSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const { showNotification } = useContext(NotificationContext);
  const { values, handleChange, handleSubmit, touched, errors } = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      authService
        .signIn(values)
        .then((res) => {
          if (res.data.maLoaiNguoiDung == "HV") {
            showNotification(`Chào mừng học viên ${res.data.hoTen}`, "info");
            setLocalStorage("user", { ...res.data, matKhau: values.matKhau });
            dispatch(userStatus(res.data));
            setTimeout(() => {
              navigate(path.homePage);
            }, 1000);
          }
          if (res.data.maLoaiNguoiDung == "GV") {
            showNotification(`Chào mừng giáo vụ ${res.data.hoTen}`, "info");
            setLocalStorage("admin", { ...res.data, matKhau: values.matKhau });
            dispatch(userStatus(res.data));
            setTimeout(() => {
              navigate(path.manageUser);
            }, 1000);
          }
        })
        .catch((err) => {
          // console.log(err);
          showNotification(
            "Có lỗi xảy ra vui lòng thử lại hoặc liên hệ bộ phận khách hàng",
            "error"
          );
        });
    },
  });
  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto pt-28 pb-10 ">
        <div className={`login-page ${isActive ? "active" : ""}`}>
          <div className="grid grid-cols-10 gap-5 border p-10 rounded-md">
            <div className="flex flex-col justify-center space-y-5 col-span-5 login-left">
              <h2 className="text-3xl font-bold text-purple-800 underline uppercase text-center">
                Đăng ký
              </h2>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <InputCustom
                  name="taiKhoan"
                  labelContent="Tài khoản"
                  typeInput="text"
                  value={values.taiKhoan}
                  onChange={handleChange}
                />
                <InputCustom
                  name="matKhau"
                  labelContent="Mật khẩu"
                  typeInput="password"
                  onChange={handleChange}
                  value={values.matKhau}
                />
                <InputCustom
                  name="hoTen"
                  labelContent="Họ và Tên"
                  typeInput="text"
                  onChange={handleChange}
                  value={values.hoTen}
                />
                <InputCustom
                  name="email"
                  labelContent="Email"
                  typeInput="text"
                  onChange={handleChange}
                  value={values.email}
                />
                <InputCustom
                  name="soDT"
                  labelContent="Số Điện Thoại"
                  onChange={handleChange}
                  value={values.soDT}
                />

                <button
                  type="submit"
                  className="px-5 py-3 rounded-md button-left text-center border-transparent active:scale-90"
                >
                  Đăng ký
                </button>
              </form>
            </div>
            <div className="flex flex-col justify-between space-y-5 col-span-5 login-right">
              <div></div>
              <div className="space-y-5">
                <h2 className="text-3xl uppercase font-bold text-purple-800 text-center underline">
                  Đăng nhập
                </h2>
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <InputCustom
                    name="taiKhoan"
                    labelContent="Tài khoản"
                    typeInput="text"
                    value={values.taiKhoan}
                    onChange={handleChange}
                  />
                  <InputCustom
                    name="matKhau"
                    labelContent="Mật khẩu"
                    typeInput="password"
                    onChange={handleChange}
                    value={values.matKhau}
                  />
                  <div className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span className="text-sm">Ghi nhớ đăng nhập</span>
                  </div>
                  <div className="text-gray-500 text-sm">
                    <p>
                      Quên mật khẩu ?{" "}
                      <button className="text-purple-500 underline font-semibold">
                        Khôi phục
                      </button>
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-md button-left border-transparent active:scale-90"
                  >
                    Đăng nhập
                  </button>
                  <div className="text-center space-y-5">
                    <div className="relative">
                      <hr />
                      <h3 className="text-gray-400 text-sm absolute top-[-1000%] left-[38%] bg-white px-2">
                        Other login options
                      </h3>
                    </div>
                    <div className="container mx-auto flex items-center justify-around w-1/3">
                      <img
                        src="../../../public/icons8-facebook-48.png"
                        alt=""
                        className="border p-1 hover:bg-purple-200 duration-300 cursor-pointer"
                      />
                      <img
                        src="../../../public/icons8-google-48.png"
                        alt=""
                        className="border p-1 hover:bg-purple-200 duration-300 cursor-pointer"
                      />
                      <img
                        src="../../../public/icons8-apple-50.png"
                        alt=""
                        className="border p-1 hover:bg-purple-200 duration-300 cursor-pointer"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-10 gap-5 p-10 rounded-md login-overlay">
            <div className="text-center col-span-5 bg-purple-100 pb-5 login-overlay-left">
              <div className="">
                <Lottie
                  animationData={animationSignIn}
                  loop={true}
                  style={{
                    height: "26rem",
                    width: "100%",
                  }}
                />
              </div>
              <button
                className="x-5 py-3 rounded-md button-left text-center border-transparent active:scale-90"
                onClick={toggleActive}
              >
                Đăng ký ?
              </button>
            </div>
            <div className="text-center col-span-5 bg-purple-100 pb-5 login-overlay-right">
              <div className="">
                <Lottie
                  animationData={animationSignUp}
                  loop={true}
                  style={{ height: "26rem", width: "100%" }}
                />
              </div>
              <button
                className="x-5 py-3 rounded-md button-left text-center border-transparent active:scale-90"
                onClick={toggleActive}
              >
                Đăng nhập ?
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
