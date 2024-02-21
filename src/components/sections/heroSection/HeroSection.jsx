import React, { useEffect, useRef } from "react";
import "./HeroSection.scss";
import Text from "../../text/Text";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css"; // Import CSS for styling
import MediumButton from "../../button/MediumButton/MediumButton";
import {
  formdataTitle,
  hrTagStyle,
  subTitleStyle,
  titleStyle,
} from "../../../utils/styleConstant/heroSectionData";

export default function HeroSection({ title, subtitle, bannerImg, formData }) {
  const phoneInputRef = useRef(null);
  useEffect(() => {
    const phoneInput = intlTelInput(phoneInputRef.current, {
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });

    // Ensure that the intlTelInput instance is properly destroyed when the component unmounts
    return () => {
      phoneInput.destroy();
    };
  }, []);
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="hero-content">
        {/* text section */}
        <div className="text-section">
          <Text
            text={title}
            styleText={titleStyle}
            className={"shared"}
            setDualColor={true}
            setNewLine={true}
          />
          <hr style={hrTagStyle} className="shared" />
          <Text
            text={subtitle}
            styleText={subTitleStyle}
            className={"shared"}
          />
        </div>
        {/* form section */}
        <div className="form-section">
          <Text
            text={formData?.title}
            styleText={formdataTitle}
            className={"form-title"}
          />
          <div className="form-input">
            <input
              ref={phoneInputRef}
              id="phone"
              type="tel"
              name="phone"
              autoComplete="off"
            />
          </div>
          <div className="form-submit">
            <>
              <MediumButton text={"立即免費試堂"} type={"submit"} />
            </>
            <>
              <label className="check-container">
                我已經閱讀並同意條款與細則
                <input type="checkbox" className="checkbox" checked />
                <span className="checkmark"></span>
              </label>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
