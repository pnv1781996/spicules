import React from "react";
import "./Header.scss";
import {
  headerTextStyle,
  iconStyle,
} from "../../../utils/styleConstant/topHeaderData";
import Text from "../../text/Text";
import { topHeader } from "../../../utils/content";
import { PiFacebookLogo } from "react-icons/pi";
import { PiWhatsappLogo } from "react-icons/pi";
import { PiMessengerLogoLight } from "react-icons/pi";
import DropDown from "../../dropDown/DropDown";
import { buttonText } from "../../../utils/styleConstant/topHeaderData";
import SmallButton from "../../button/SmallButton/SmallButton";
import NavBar from "../../navbar/NavBar";

export default function Header() {
  return (
    <div className="main-header">
      <div className="top-header">
        <div className="left-side">
          <Text text={topHeader?.text} styleText={headerTextStyle} />
        </div>
        <div className="right-side">
          <PiFacebookLogo style={iconStyle} />
          <PiWhatsappLogo style={iconStyle} />
          <PiMessengerLogoLight style={iconStyle} />
          <DropDown className={"coutry-dropdown"} />
          <SmallButton text={buttonText.text} type={"submit"} />
        </div>
      </div>
      <div className="header">
        <NavBar />
      </div>
    </div>
  );
}
