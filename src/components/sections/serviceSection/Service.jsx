import React, { useState } from "react";
import "./Service.scss";
import {
  serviceText,
  sliderBtn,
  sliderContent,
  sliderCount,
  sliderTitle,
} from "../../../utils/styleConstant/serviceData";
import Text from "../../text/Text";
import { sliderIcon, sliderImg } from "../../../assets";
import MediumButton from "../../button/MediumButton/MediumButton";
import { IoCaretForwardSharp } from "react-icons/io5";
import { IoCaretBackSharp } from "react-icons/io5";

export default function Service() {
  const [slideCount, setSliderCount] = useState(1);
  return (
    <div className="service-section">
      <div className="service-container">
        <div className="service-content">
          <Text text={serviceText.title} styleText={serviceText.style} />
          <div className="slider-count">
            <Text text={"0" + slideCount} styleText={sliderCount.style} />
          </div>
          <div className="service-slider">
            <div className="slider-content">
              <img
                src={sliderIcon}
                alt={"slider icon"}
                style={{ marginBottom: "30px" }}
              />
              <div className="content">
                <Text text={sliderTitle.title} styleText={sliderTitle.style} />
                <Text
                  text={sliderContent.title}
                  styleText={sliderContent.style}
                />
                <MediumButton
                  text={sliderBtn.text}
                  width={sliderBtn.width}
                  height={sliderBtn.height}
                />
              </div>
              <div className="control spacing">
                <IoCaretBackSharp />
                <IoCaretForwardSharp />
              </div>
            </div>
            <div className="blank"></div>
            <div className="slider-img">
              <img src={sliderImg} alt="slider image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
