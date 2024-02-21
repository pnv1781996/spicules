import React from "react";
import "./System.scss";
import Text from "../../text/Text";
import {
  styleCard,
  styleCard2,
  styleCard3,
  systemTitle,
} from "../../../utils/styleConstant/systemData";
import { assetImg1, assetImg2, assetImg3, bgSystem } from "../../../assets";
import MediumButton from "../../button/MediumButton/MediumButton";

export default function System() {
  return (
    <div className="system-section">
      <div className="system-container">
        <div className="system-content">
          <Text
            text={systemTitle.title}
            setDualColor={true}
            styleText={systemTitle.style}
          />
          {/* card1 */}
          <div className="system-header">
            <div
              className="content"
              style={{ backgroundImage: `url(${bgSystem})` }}
            >
              <div className="system1">
                <div style={styleCard.number}>01</div>
                <div style={styleCard.title}>
                  精英寫作課程 STRUCTURED WRITING
                </div>
                <div style={styleCard.subText1}>拓展思維 能說會道</div>
                <div style={styleCard.subText2}>適合7-12歲</div>
                <MediumButton
                  text={"立即免費試堂"}
                  height={"48px"}
                  width={"160px"}
                  changeBg={true}
                  bgColor={"#FF587C"}
                />
              </div>
              <div className="system1-img">
                <img src={assetImg1} />
              </div>
            </div>
            <div className="blank"></div>
          </div>
          {/* card 2 */}
          <div className="system-header">
            <div className="blank"></div>
            <div
              className="content"
              style={{ backgroundImage: `url(${bgSystem})` }}
            >
              <div className="system1">
                <div style={styleCard.number}>02</div>
                <div style={styleCard2.title}>閱讀課程 GUIDED READING </div>
                <div style={styleCard.subText1}>聽說讀寫 融會貫通</div>
                <div style={styleCard.subText2}>適合5-12歲</div>
                <MediumButton
                  text={"立即免費試堂"}
                  height={"48px"}
                  width={"160px"}
                />
              </div>
              <div className="system1-img">
                <img src={assetImg3} />
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="system-header">
            <div
              className="content"
              style={{ backgroundImage: `url(${bgSystem})` }}
            >
              <div className="system1">
                <div style={styleCard.number}>03</div>
                <div style={styleCard3.title}>
                  自然拼讀課程 SUPER PHONICS CURRICULUM{" "}
                </div>
                <div style={styleCard.subText1}>聽音能寫 見字能讀</div>
                <div style={styleCard.subText2}>適合4-7歲</div>
                <MediumButton
                  text={"立即免費試堂"}
                  height={"48px"}
                  width={"160px"}
                  changeBg={true}
                  bgColor={"#05B9F6"}
                />
              </div>
              <div className="system1-img">
                <img src={assetImg2} />
              </div>
            </div>
            <div className="blank"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
