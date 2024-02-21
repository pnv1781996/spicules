import React from "react";

export default function DropDown({ className }) {
  return (
    <select className={className}>
      <option value="hongkong">Hongkong</option>
      <option value="china">China</option>
      <option value="korea">Korea</option>
    </select>
  );
}
