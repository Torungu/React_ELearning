import React from "react";

const InputCustom = ({
  labelContent,
  id,
  placeholder = "",
  name,
  onChange,
  value,
  onBlur,
  error,
  touched,
  disabled = false,
  typeInput = "text",
  readOnly = false,
}) => {
  return (
    <div className="input-custom">
      <input
        type={typeInput}
        id={id}
        className={`border hover:border-black  focus:border-purple-800 text-gray-900 rounded-md outline-none w-full p-2.5 mb-3 ${
          error && touched ? "border-red-500" : "border-gray-300 "
        }`}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        disabled={disabled}
        readOnly={readOnly}
      />
      <label
        htmlFor={id}
        className={`block mb-2 font-medium ${
          error && touched ? "text-red-500" : "text-gray-900"
        }`}
      >
        {labelContent}
      </label>
      {error && touched ? (
        <p className="text-red-500 visible h-4 text-sm">{error}</p>
      ) : (
        <p className="text-red-500 invisible h-4 text-sm">{error}</p>
      )}
    </div>
  );
};

export default InputCustom;
