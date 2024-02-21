import React from "react";
import "./Text.scss";
export default function Text({
  text,
  styleText,
  className,
  setDualColor,
  setNewLine,
}) {
  const isDualColor = setDualColor ?? false;
  const isBreakInNewLine = setNewLine ?? false;
  const words = isDualColor || isBreakInNewLine ? text.split(" ") : text;

  return (
    <>
      {isDualColor && isBreakInNewLine ? (
        <div className={className ?? ""} style={styleText}>
          {words.map((word, index) => (
            <div
              key={index}
              className={index % 2 === 0 ? null : "default-color"}
            >
              {word}{" "}
            </div>
          ))}
        </div>
      ) : isDualColor ? (
        <div className={className ?? ""} style={styleText}>
          {words.map((word, index) => (
            <span
              key={index}
              className={index % 2 === 0 ? null : "default-color"}
            >
              {word}{" "}
            </span>
          ))}
        </div>
      ) : isBreakInNewLine ? (
        <div className={className ?? ""} style={styleText}>
          {words.map((word, index) => (
            <div key={index}>{word} </div>
          ))}
        </div>
      ) : (
        <div className={className ?? ""} style={styleText}>
          {text}
        </div>
      )}
    </>
  );
}
