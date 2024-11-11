import React from "react";

const FormInput = ({ id, name, title, type, placeholder, required }) => {
  return (
    <div className="w-full rounded-lg flex flex-col gap-y-1.5 my-3">
      <label className="font-semibold text-lg" htmlFor={id}>
        {title}
      </label>
      <input
        type={type || "text"}
        id={id}
        name={name || id}
        placeholder={placeholder}
        className="border-b border-gray-400 focus:border-gray-600 focus:outline-none shadow-sm"
        required={required || false}
      />
    </div>
  );
};

export default FormInput;
