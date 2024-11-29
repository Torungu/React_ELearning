import React, { forwardRef, useImperativeHandle } from "react";
import InputCustom from "../Input/InputCustom";
import { authService } from "../../service/auth.service";
import { userStatus } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { path } from "../../common/path";
import { useFormik } from "formik";
import utils, { setLocalStorage } from "../../utils/utils";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { values, handleChange, handleSubmit, touched, errors, resetForm } =
    useFormik({
      initialValues: {
        taiKhoan: "",
        matKhau: "",
        checkMatKhau: "",
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
  return (
    <>
      <h2 className="text-3xl font-bold text-purple-800 underline uppercase text-center">
        Đăng ký
      </h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <InputCustom
          // id={"taiKhoan"}
          name={"taiKhoan"}
          labelContent={"Tài khoản"}
          typeInput="text"
          value={values.taiKhoan}
          onChange={handleChange}
        />
        <InputCustom
          // id={"matKhau"}
          name={"matKhau"}
          labelContent={"Mật khẩu"}
          typeInput="password"
          onChange={handleChange}
          value={values.matKhau}
        />
        <InputCustom
          id={"checkMatKhau"}
          name={"checkMatKhau"}
          labelContent={"Xác nhận lại mật khẩu"}
          typeInput="password"
          onChange={handleChange}
          value={values.checkMatKhau}
        />
        <InputCustom
          id={"hoTen"}
          name={"hoTen"}
          labelContent={"Họ và Tên"}
          typeInput="text"
          onChange={handleChange}
          value={values.hoTen}
        />
        <InputCustom
          id={"email"}
          name={"email"}
          labelContent={"Email"}
          typeInput="text"
          onChange={handleChange}
          value={values.email}
        />
        <InputCustom
          id={"soDT"}
          name={"soDT"}
          labelContent={"Số Điện Thoại"}
          onChange={handleChange}
          value={values.soDT}
        />
        <div className="flex items-center text-gray-500">
          <p className="text-sm">
            Khi đăng ký bạn chấp nhận các{" "}
            <a href="#" className="text-purple-500 underline font-semibold">
              Điều khoản
            </a>{" "}
            và{" "}
            <a href="#" className="text-purple-500 underline font-semibold">
              Chính sách
            </a>{" "}
            của chúng tôi
          </p>
        </div>
        <button
          type="submit"
          className="px-5 py-3 rounded-md button-left text-center border-transparent active:scale-90"
        >
          Đăng ký
        </button>
      </form>
    </>
  );
};

export default SignUp;
