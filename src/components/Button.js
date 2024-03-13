import React from "react";

const Button = () => {
  let buttonList = [
    "All",
    "Gamings",
    "Songs",
    "Live",
    "Sports",
    "Cricket",
    "News",
    "Party",
    "Cooking",
    "Army",
    "Modi",
  ];
  return (
    <div className="flex">
      {buttonList.map((button, index) => {
        return (
          <div
            key={index}
            className="w-20  m-2 border flex justify-center hover:bg-gray-200 rounded-md"
          >
            <button key={index}>{button}</button>
          </div>
        );
      })}
    </div>
  );
};

export default Button;
