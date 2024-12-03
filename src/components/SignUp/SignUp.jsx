import React, { forwardRef, useContext, useImperativeHandle } from "react";
import InputCustom from "../Input/InputCustom";
import { NotificationContext } from "../../App";
import { authService } from "../../service/auth.service";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import utils, { setLocalStorage } from "../../utils/utils";

const SignUp = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const { showNotification } = useContext(NotificationContext);
  const { values, handleChange, handleSubmit, touched, errors, resetForm } =
    useFormik({
      initialValues: {
        taiKhoan: "",
        matKhau: "",
        checkMatKhau: "",
        hoTen: "",
        email: "",
        soDT: "",
        maNhom: "GP01",
      },
      onSubmit: (values) => {
        const { checkMatKhau, ...submitValues } = values;
        authService
          .signUp(submitValues)
          .then((res) => {
            showNotification("Đăng ký thành công", "success");
            setTimeout(() => {
              resetForm();
              window.location.reload();
            }, 1000);
          })
          .catch((err) => {
            console.log(err);
            showNotification(`${err.response.data}`, "error");
          });
      },
      validationSchema: utils.validationForm2,
    });

  useImperativeHandle(ref, () => ({
    resetForm: () => {
      resetForm();
    },
  }));

  return (
    <>
      <h2 className="text-2xl sm:text-3xl font-bold text-purple-800 underline uppercase text-center">
        Đăng ký
      </h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <InputCustom
          id={"taiKhoan"}
          name={"taiKhoan"}
          labelContent={"Tài khoản"}
          typeInput="text"
          value={values.taiKhoan}
          touched={touched.taiKhoan}
          onChange={handleChange}
          error={errors.taiKhoan}
        />
        <InputCustom
          id={"matKhau"}
          name={"matKhau"}
          labelContent={"Mật khẩu"}
          typeInput="password"
          onChange={handleChange}
          value={values.matKhau}
          touched={touched.matKhau}
          autocomplete="current-password"
          error={errors.matKhau}
        />
        <InputCustom
          id={"checkMatKhau"}
          name={"checkMatKhau"}
          labelContent={"Xác nhận lại mật khẩu"}
          typeInput="password"
          onChange={handleChange}
          value={values.checkMatKhau}
          touched={touched.checkMatKhau}
          autocomplete="new-password"
          error={errors.checkMatKhau}
        />
        <InputCustom
          id={"hoTen"}
          name={"hoTen"}
          labelContent={"Họ và Tên"}
          typeInput="text"
          onChange={handleChange}
          value={values.hoTen}
          touched={touched.hoTen}
          error={errors.hoTen}
        />
        <InputCustom
          id={"email"}
          name={"email"}
          labelContent={"Email"}
          typeInput="text"
          onChange={handleChange}
          value={values.email}
          touched={touched.email}
          error={errors.email}
        />
        <InputCustom
          id={"soDT"}
          name={"soDT"}
          labelContent={"Số Điện Thoại"}
          onChange={handleChange}
          value={values.soDT}
          touched={touched.soDT}
          error={errors.soDT}
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
});

export default SignUp;
