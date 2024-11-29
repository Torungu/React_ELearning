import React, { forwardRef, useImperativeHandle } from "react";
import InputCustom from "../Input/InputCustom";
import { authService } from "../../service/auth.service";
import { userStatus } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { path } from "../../common/path";
import { useFormik } from "formik";
import utils, { setLocalStorage } from "../../utils/utils";

const SignIn = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { values, handleChange, handleSubmit, touched, errors, resetForm } =
    useFormik({
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
              setLocalStorage("admin", {
                ...res.data,
                matKhau: values.matKhau,
              });
              dispatch(userStatus(res.data));
              setTimeout(() => {
                navigate(path.manageUser);
              }, 1000);
            }
          })
          .catch((err) => {
            showNotification("Sai mật khẩu hoặc tài khoản", "error");
          })
          .finally(() => {
            resetForm();
          });
      },
      validationSchema: utils.validationForm1,
    });
  useImperativeHandle(ref, () => ({
    resetForm: () => {
      resetForm();
    },
  }));

  return (
    <>
      <div></div>
      <div className="space-y-5">
        <h2 className="text-3xl uppercase font-bold text-purple-800 text-center underline">
          Đăng nhập
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <InputCustom
            id={"taiKhoan"}
            name={"taiKhoan"}
            labelContent={"Tài khoản"}
            value={values.taiKhoan}
            onChange={handleChange}
            touched={touched.taiKhoan}
            error={errors.taiKhoan}
          />
          <InputCustom
            id={"matKhau"}
            name={"matKhau"}
            labelContent={"Mật khẩu"}
            typeInput={"password"}
            value={values.matKhau}
            touched={touched.matKhau}
            onChange={handleChange}
            error={errors.matKhau}
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
          <div className="text-center space-y-5 relative">
            <div className="">
              <hr />
              <h3 className="text-gray-400 text-sm absolute top-[-12%] left-[38%] bg-white px-2">
                Other login options
              </h3>
            </div>
            <div className="container mx-auto grid grid-cols-3 items-center w-1/3 gap-3">
              <img
                src="/icons8-facebook-48.png"
                alt=""
                className="border p-1 hover:bg-purple-200 duration-300 cursor-pointer"
              />
              <img
                src="/icons8-google-48.png"
                alt=""
                className="border p-1 hover:bg-purple-200 duration-300 cursor-pointer"
              />
              <img
                src="/icons8-apple-50.png"
                alt=""
                className="border p-1 hover:bg-purple-200 duration-300 cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
});

export default SignIn;
