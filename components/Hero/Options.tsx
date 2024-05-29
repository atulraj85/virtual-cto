"use client";
import React, { useState } from "react";
import "./Options.scss";

const Options = () => {
  const [activeOption, setActiveOption] = useState(0);

  const handleClick = (index) => {
    setActiveOption(index);
  };

  return (
    <div className="options">
      {[
        "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
        "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
        "https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg",
      ].map((url, index) => (
        <div
          key={index}
          className={`option ${index === activeOption ? "active" : ""}`}
          onClick={() => handleClick(index)}
          style={{ backgroundImage: `url(${url})` }}
        >
          <div className="shadow" />
          <div className="label">
            <div className="icon"></div>
            <div className="info">
              <div className="main">Option {index + 1}</div>
              <div className="sub">Description for option {index + 1}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Options;
