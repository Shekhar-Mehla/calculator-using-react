import React, { useState } from "react";
import { Button } from "./components/Button";
import { Display } from "./components/Display";
import "./App.css";

export const App = () => {
  const buttonArray = [
    "AC",
    "C",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  const [buttonList, setbuttonList] = useState(buttonArray);

  const [buttonValue, setbuttonValue] = useState("");

  const getvalue = (value) => {
    switch (value) {
      case "=":
        setbuttonValue(eval(buttonValue));

        break;

      case "AC":
        setbuttonValue("");
        break;
      default:
        setbuttonValue(buttonValue + value);
        break;
    }
  };
  return (
    <div className="wrapper">
      <h2 className="text-center">REACT CALCULATOR</h2>
      <div className="calculator rounded">
        <Display buttonValue={buttonValue}></Display>
        <Button getvalue={getvalue} buttonList={buttonList}></Button>
      </div>
      {/* display */}

      {/* button */}
    </div>
  );
};
