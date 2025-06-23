import { React, useState } from "react";
import "./App.css";
import ButtonState from "./components/ButtonState";
import Heading from "./components/Heading";
import Display from "./components/Display";

function App() {
  let [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    console.log("Button clicked:", buttonText);
    if (buttonText === "Clear") {
      setCalVal("");
    } else if (buttonText === "=" || buttonText === "Calculate") {
      try {
        const result = eval(calVal);
        setCalVal(result.toString());
      } catch (error) {
        setCalVal("error");
      }
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      <div className="container border border-gray-300 rounded-lg p-6 max-w-[700px] mx-auto mt-10 bg-white shadow-md">
        {/* Header Section */}
        <Heading />
        {/* Calculator UI */}
        <div className="container max-w-fit mx-auto mt-10 p-4 bg-gray-100 rounded-lg shadow-lg shadow-gray-500/50">
          {/* Input Section */}
          <Display displayValue={calVal} />
          <ButtonState onButtonState={onButtonClick} />
        </div>
      </div>
    </>
  );
}

export default App;
