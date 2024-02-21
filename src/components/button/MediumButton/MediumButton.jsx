import React from "react";
import "./MediumButton.scss";
export default function MediumButton({
  type,
  text,
  btnType,
  width,
  height,
  changeBg,
  bgColor,
}) {
  return (
    <button
      type={type ?? "button"}
      className="medium-round-btn"
      style={
        btnType === "borderBtn"
          ? {
              backgroundColor: "var(--white-color)",
              color: "var(--primary-color)",
              height: height ?? "",
              width: width ?? "",
            }
          : (width && height) || changeBg
          ? { height: height, width: width, backgroundColor: bgColor ?? "" }
          : null
      }
    >
      {text}
    </button>
  );
}
