import React from "react";

const ButtonContainer = ({ onButtonClick }) => {
  // Button values for numbers and operators
  const numberButtons = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
  const operatorButtons = ["+", "-", "*", "/", ".", "="];

  return (
    <>
      {/* Buttons Section */}
      <div className="flex justify-center items-center mt-4">
        <div className="grid grid-cols-3 gap-4 w-96">
          {/* Number Buttons */}
          {numberButtons.map((num) => (
            <button
              onClick={() => onButtonClick(num)}
              key={num}
              className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-slate-400 shadow-lg shadow-slate-600/50"
            >
              {num}
            </button>
          ))}

          {/* Operator Buttons */}
          {operatorButtons.map((op) => (
            <button
              onClick={() => onButtonClick(op)}
              key={op}
              className={`bg-gray-300 text-black px-4 py-2 rounded hover:bg-slate-400 shadow-lg shadow-slate-600/50 ${
                op === "." ? "font-bold" : ""
              }`}
            >
              {op}
            </button>
          ))}

          {/* Action Buttons */}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 shadow-lg shadow-blue-700/100 text-sm sm:text-base md:text-lg"
            onClick={() => onButtonClick("Calculate")}
          >
            Calculate
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 ml-4 rounded hover:bg-red-600 shadow-lg shadow-red-700/100 text-sm sm:text-base md:text-lg"
            onClick={() => onButtonClick("Clear")}
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
};

export default ButtonContainer;
