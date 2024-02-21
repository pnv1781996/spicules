import React, { useState } from "react";
import "./Guarantee.scss";
import Text from "../../text/Text";
import {
  btnHeading,
  drawerMargin,
  drawerRating,
  drawerTitle,
  draweruniversity,
  headingStyle,
  headingText,
  specialization,
  specializationTag,
  subHeadingStyle,
  subHeadingText,
  teacherData,
} from "../../../utils/styleConstant/guaranteeSectionData";
import MediumButton from "../../button/MediumButton/MediumButton";
import Rating from "react-rating-stars-component";
import SmallButton from "../../button/SmallButton/SmallButton";

export default function Guarantee() {
  const [hoveredTeacher, setHoveredTeacher] = useState(null);

  return (
    <div className="guarantee-section">
      <div className="guarantee-container">
        <div className="guarantee-content">
          <div className="guarantee-heading">
            <Text text={headingText.text} styleText={headingStyle} />
            <MediumButton
              text={btnHeading.text}
              width={btnHeading.width}
              height={btnHeading.height}
            />
          </div>
          <div className="guarantee-subheading">
            <Text text={subHeadingText.text} styleText={subHeadingStyle} />
          </div>
          <div className="eleSpacing teacher">
            {teacherData.map((teacher, index) => (
              <div
                className="image-container"
                key={index}
                onMouseEnter={() => setHoveredTeacher(teacher)}
                onMouseLeave={() => setHoveredTeacher(null)}
              >
                <img
                  src={teacher.image}
                  alt="teacher images"
                  className="image"
                />
                {hoveredTeacher === teacher && (
                  <div className="drawer">
                    <div className="drawer-content">
                      <span style={drawerTitle}>{teacher.name}</span>
                      <span style={draweruniversity}>{teacher.university}</span>
                      <span style={drawerRating}>
                        <Rating
                          count={5}
                          size={24}
                          value={teacher.rating}
                          isHalf={true}
                          emptyIcon={<i className="far fa-star"></i>}
                          halfIcon={<i className="fa fa-star-half-alt"></i>}
                          fullIcon={<i className="fa fa-star"></i>}
                          activeColor="#fff"
                        />
                        <span style={drawerMargin}>{teacher.rating}</span>
                        <span>({teacher.review} review)</span>
                      </span>
                      <span style={specialization}>Specialization:</span>
                      <div style={{ display: "flex" }}>
                        {teacher.specialization.map((specialization, i) => (
                          <span key={i} style={specializationTag}>
                            {specialization}
                          </span>
                        ))}
                      </div>
                      <span>
                        <SmallButton
                          text={"View Profile"}
                          type={"submit"}
                          btnType={"borderBtn"}
                        />
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
