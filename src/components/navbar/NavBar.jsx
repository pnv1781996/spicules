import React from "react";
import { mainLogo } from "../../assets";
import { navBarMenu } from "../../utils/content";
import SmallButton from "../button/SmallButton/SmallButton";
import { buttonHeaderText } from "../../utils/styleConstant/headerData";
import "./NavBar.scss";
export default function NavBar() {
  return (
    <div className="header-container">
      <div className="logo">
        <img src={mainLogo} alt="main-logo" />
      </div>
      <div className="nav-bar">
        {navBarMenu?.map((menu, index) => {
          return (
            <span key={menu + index} className="menu-item">
              {menu.menu}
            </span>
          );
        })}
      </div>
      <div className="nav-btn">
        <SmallButton text={buttonHeaderText.text1} type={"submit"} />
        <SmallButton
          text={buttonHeaderText.text2}
          type={"submit"}
          btnType={"borderBtn"}
        />
      </div>
    </div>
  );
}
