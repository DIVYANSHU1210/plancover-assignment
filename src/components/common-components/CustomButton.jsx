import React from "react";
// import "../common-components/style-common.css";
function CustomButton({ text, clickFunc }) {
  return (
    <button className="custom-btn" onClick={clickFunc}>
      {text}
    </button>
  );
}

export default CustomButton;
