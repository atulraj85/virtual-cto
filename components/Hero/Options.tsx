"use client";
import React, { useState } from "react";
import "./Options.scss";

const optionsData = [
  {
    url: "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
    title: "Virtual",
    description: "Description for option 1",
  },
  {
    url: "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
    title: "Chief Technical",
    description: "Description for option 2",
  },
  {
    url: "https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg",
    title: "Officer",
    description: "Description for option 3",
  },
];

const Options = () => {
  const [activeOption, setActiveOption] = useState(0);

  const handleClick = (index) => {
    setActiveOption(index);
  };

  return (
    <div className="options">
      {optionsData.map((option, index) => (
        <div
          key={index}
          className={`option ${index === activeOption ? "active" : ""} `}
          onClick={() => handleClick(index)}
          style={{ backgroundImage: `url(${option.url})` }}
        >
          <div className="label absolute bottom-5 right-5 flex items-center">
            <div className="info ml-3 text-white">
              <div className="main text-lg font-semibold">{option.title}</div>
              <div className="sub text-sm">{option.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Options;
