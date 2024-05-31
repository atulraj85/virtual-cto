"use client";
import React, { useState, useEffect } from "react";
import "./Options.css";

const optionsData = [
  {
    url: "/images/hero/accordion/business-men-use-laptops-entrance-office-building.jpg",
    title: "Business Men Using Laptops",
    description: "Description for option 1",
  },
  {
    url: "/images/hero/accordion/portrait-indigenous-businesswoman.jpg",
    title: "Indigenous Businesswoman Portrait",
    description: "Description for option 2",
  },
  {
    url: "/images/hero/accordion/smiling-business-man-sitting-empty-office-desk.jpg",
    title: "Smiling Business Man at Desk",
    description: "Description for option 3",
  },
];

const Options = () => {
  const [activeOption, setActiveOption] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let intervalId;

    if (!isPaused) {
      intervalId = setInterval(() => {
        setActiveOption((prevIndex) => (prevIndex + 1) % optionsData.length);
      }, 2000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isPaused]);

  const handleClick = (index) => {
    setActiveOption(index);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      className="options"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {optionsData.map((option, index) => (
        <div
          key={index}
          className={`option ${index === activeOption ? "active" : ""}`}
          onClick={() => handleClick(index)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
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
