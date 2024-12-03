import React, { useContext, useRef, useState } from "react";
import InputCustom from "../../components/Input/InputCustom";
import { useFormik } from "formik";
import { authService } from "../../service/auth.service";
import Lottie, { useLottie } from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import { path } from "../../common/path";
import utils, { getLocalStorage, setLocalStorage } from "../../utils/utils";
import { NotificationContext } from "../../App";
import animationSignIn from "../../assets/animation/signinAnimation.json";
import animationSignUp from "../../assets/animation/SignUpAnimation.json";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useDispatch } from "react-redux";
import { userStatus } from "../../redux/userSlice";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const LoginPage = () => {
  const [status, setStatus] = useState("nonactive");
  const [change, setChange] = useState("nonactive");
  const { showNotification } = useContext(NotificationContext);
  const signInRef = useRef(null);
  const signUpRef = useRef(null);

  return (
    <>
      <Header />
      <div className="container mx-auto pt-28 pb-10 ">
        <div className="sm:block hidden">
          <div className={`login-page ${status}`}>
            <div className="grid grid-cols-10 gap-5 border p-10 rounded-md">
              <div className="flex flex-col justify-center space-y-5 col-span-5 login-left">
                <SignUp ref={signUpRef} />
              </div>
              <div className="flex flex-col justify-between space-y-5 col-span-5 login-right">
                <SignIn ref={signInRef} />
              </div>
            </div>
            <div className="grid grid-cols-10 gap-5 p-10 rounded-md login-overlay h-full">
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
                  onClick={() => {
                    setStatus("active");
                    if (signInRef.current) {
                      signInRef.current.resetForm();
                    }
                  }}
                >
                  Đăng ký ?
                </button>
              </div>
              <div className="text-center col-span-5 bg-purple-100 login-overlay-right">
                <div className="">
                  <Lottie
                    animationData={animationSignUp}
                    loop={true}
                    style={{ height: "26rem", width: "100%" }}
                  />
                </div>
                <button
                  className="x-5 py-3 rounded-md button-left text-center border-transparent active:scale-90"
                  onClick={() => {
                    setStatus("nonactive");
                    if (signUpRef.current) {
                      signUpRef.current.resetForm();
                    }
                  }}
                >
                  Đăng nhập ?
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Login Mobile */}
        <div className="block sm:hidden">
          <div className="flex flex-col space-y-5">
            <div className={`grid grid-cols-2 login-mobile ${change}`}>
              <button
                className="login-mobile-left font-semibold rounded-md py-2 uppercase text-center"
                onClick={() => {
                  setChange("nonactive");
                  if (signUpRef.current) {
                    signUpRef.current.resetForm();
                  }
                }}
              >
                Đăng nhập
              </button>
              <button
                className="login-mobile-right font-semibold rounded-md py-2 uppercase text-center"
                onClick={() => {
                  setChange("active");
                  if (signInRef.current) {
                    signInRef.current.resetForm();
                  }
                }}
              >
                Đăng ký
              </button>
              <div className="login-mobile-overlay w-1/2 h-full bg-purple-600 rounded-md"></div>
            </div>
            <div className="login-mobile-content">
              <div className="space-y-3 login-dang-nhap">
                <SignIn ref={signInRef} />
              </div>
              <div className="space-y-3 login-dang-ky">
                <SignUp ref={signUpRef} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
