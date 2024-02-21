import React from "react";
import "./BoxingEduSection.scss";
import { boxingBgImg } from "../../../assets";
import Text from "../../text/Text";
import {
  boxingData,
  boxingStyle,
  btnDetails,
  counter,
  counterLabelStyle,
  counterStyle,
} from "../../../utils/styleConstant/boxingSectionData";
import MediumButton from "../../button/MediumButton/MediumButton";
export default function BoxingEduSection() {
  return (
    <div
      className="boxing-section"
      style={{ backgroundImage: `url(${boxingBgImg})` }}
    >
      <div className="boxing-container">
        <div className="boxing-content">
          <Text
            setDualColor={true}
            text={boxingData.text}
            styleText={boxingStyle}
            className={"eleSpacing"}
          />
          <div className="eleSpacing counter">
            {counter.map((item, index) => (
              <div key={index}>
                <div style={counterStyle}>{item.number}</div>
                <div style={counterLabelStyle}>{item.label}</div>
              </div>
            ))}
          </div>
          <div className="boxing-btn">
            <MediumButton
              text={btnDetails.text}
              width={btnDetails.width}
              height={btnDetails.height}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
