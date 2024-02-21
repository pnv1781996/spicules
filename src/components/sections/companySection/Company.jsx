import React from "react";
import "./Company.scss";
import Text from "../../text/Text";
import {
  btnStyle,
  carousalImg,
  comapnyHeading,
  companyTextStyle,
  responsive,
} from "../../../utils/styleConstant/comapnyData";
import MediumButton from "../../button/MediumButton/MediumButton";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Company() {
  return (
    <div className="company-section">
      <div className="company-container">
        <div className="company-content">
          <div className="company-heading">
            <Text text={comapnyHeading.text} styleText={companyTextStyle} />
            <MediumButton
              text={btnStyle.text}
              width={btnStyle.width}
              height={btnStyle.height}
              btnType={"borderBtn"}
            />
          </div>
          <div>
            <Carousel
              showDots={false}
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={false}
              customTransition="all .5"
              arrows={false}
              transitionDuration={500}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {carousalImg.map((img, index) => {
                return (
                  <div key={index}>
                    <img src={img} />
                  </div>
                );
              })}
            </Carousel>
            ;
          </div>
        </div>
      </div>
    </div>
  );
}
