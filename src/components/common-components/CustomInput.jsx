import React from "react";
import "../common-components/style-common.css";
function CustomInput({type, placeholder, value, changeFunc}) {
  return (
    <input
      className="custom-input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => changeFunc(e.target.value)}
    />
  );
}

export default CustomInput;
