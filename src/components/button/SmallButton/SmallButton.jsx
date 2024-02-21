import React from "react";
import "./SmallButton.scss";
export default function SmallButton({ type, text, btnType }) {
  return (
    <button
      type={type ?? "button"}
      className="small-round-btn"
      style={
        btnType === "borderBtn"
          ? {
              backgroundColor: "var(--white-color)",
              color: "var(--primary-color)",
            }
          : null
      }
    >
      {text}
    </button>
  );
}
