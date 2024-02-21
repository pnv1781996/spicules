import React from "react";
import "./Footer.scss";
import { footerlogo, frameFooter } from "../../../assets";
import Text from "../../text/Text";
import {
  colData,
  contactList,
  countryList,
  pagesList,
} from "../../../utils/styleConstant/footerData";
export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={footerlogo} alt="main-logo" />
          <img src={frameFooter} alt="facebook" />
        </div>
        <div className="footer-content">
          <div className="col1">
            <Text
              text={colData.title}
              styleText={colData.style}
              setNewLine={true}
            />
            <div className="coutry-list">
              {countryList.map((country, index) => {
                return (
                  <span key={index} className="coutry-tag">
                    {country}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="col2">
            {pagesList.map((menuItem, index) => {
              return <div key={index}>{menuItem.menu}</div>;
            })}
          </div>
          <div className="col3">
            {contactList.map((detail, index) => {
              return (
                <div className="contact" key={index}>
                  <div className="iconImg">
                    <img src={detail.icon} alt={"icon"} />
                  </div>
                  <div className="text">{detail.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
