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
  const operator = ["+", "-", "*", "/", "%"];

  const [buttonList, setbuttonList] = useState(buttonArray);
  // store the button value on click
  const [buttonValue, setbuttonValue] = useState("");
  // uplifted the state from the button component by calling the fucniton in button component
  const getvalue = (value) => {
    switch (value) {
      case "=":
        setbuttonValue(`${eval(buttonValue)}`);

        break;

      case "C":
        setbuttonValue(buttonValue.substring(0, buttonValue.length - 1));

        break;

      case ".":
        if (buttonValue.includes(".")) {
          const lastDotIndex = buttonValue.lastIndexOf(".");
          const operraotrchecking = buttonValue.slice(lastDotIndex);

          if (operraotrchecking.includes("+" || "-" || "*" || "/")) {
            setbuttonValue(buttonValue + value);
          }
        } else {
          setbuttonValue(buttonValue + value);
        }

        break;

      case "AC":
        setbuttonValue("");
        break;

      default:
        // handle last operator here

        if (operator.includes(value)) {
          setbuttonValue(buttonValue + value);

          const lastcharc = buttonValue.slice(
            buttonValue.length - 1,
            buttonValue.length
          );

          if (operator.includes(lastcharc)) {
            setbuttonValue(buttonValue.replace(lastcharc, value));
          }
        } else {
          setbuttonValue(buttonValue + value);
        }
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
    </div>
  );
};
