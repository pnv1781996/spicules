import React from "react";

export default function InputFeild({
  name,
  value,
  placeHolder,
  onClick,
  onChange,
}) {
  return (
    <input
      name={name}
      value={value ?? ""}
      placeholder={placeHolder}
      onClick={onClick}
      onChange={onChange}
    />
  );
}
