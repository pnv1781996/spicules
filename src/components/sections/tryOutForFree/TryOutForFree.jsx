import React from "react";
import "./TryOutForFree.scss";
import {
  cardData,
  cardDescriptionStyle,
  cardTitleStyle,
  tryOutData,
  tryOutDataStyle,
  tryoutBtnDetails,
} from "../../../utils/styleConstant/tryOutForFreeData";
import MediumButton from "../../button/MediumButton/MediumButton";
import Text from "../../text/Text";
import { tryOutBg } from "../../../assets";

export default function TryOutForFree() {
  return (
    <div
      className="tryout-section"
      style={{ backgroundImage: `url(${tryOutBg})` }}
    >
      <div className="tryout-container">
        <div className="tryout-content">
          <Text
            text={tryOutData.text}
            styleText={tryOutDataStyle}
            className={"eleSpacing"}
          />
          <div className="eleSpacing tryout-card">
            {cardData.map((data, index) => {
              return (
                <div className="tryout-carddetails" key={index}>
                  <div className="card-img">
                    <img src={data.postImg} alt={`Card image ${index}`} />
                  </div>
                  <div className="card-details">
                    <div style={cardTitleStyle}>{data.postTitle}</div>
                    <div style={cardDescriptionStyle}>
                      {data.postdescription}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="tryout-btn">
            <MediumButton
              text={tryoutBtnDetails.text}
              width={tryoutBtnDetails.width}
              height={tryoutBtnDetails.height}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
