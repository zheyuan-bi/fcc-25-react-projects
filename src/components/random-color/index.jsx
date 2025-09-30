import { useState } from "react";

export default function RandomColor() {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#000000");
  const [colorStr, setColorStr] = useState("#000000");

  function handleGenerateColor() {
    switch (type) {
      case "hex":
        generateRandomHexColor();
        break;
      case "rgb":
        generateRandomRgbColor();
        break;
    }
  }

  function generateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    const NUMBER_OF_HEX_ELEMENT = hex.length;
    const LENGTH_OF_HEX_COLOR_STR = 6;
    let hexColor = "#";

    for (let i = 0; i < LENGTH_OF_HEX_COLOR_STR; i++) {
      const randomElementIndex = Math.floor(Math.random() * NUMBER_OF_HEX_ELEMENT);
      hexColor += hex[randomElementIndex];
    }
    setColor(hexColor);
    setColorStr(hexColor);
  }

  function generateRandomRgbColor() {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${randomR}, ${randomG}, ${randomB})`;

    setColor(rgbColor);
    setColorStr(rgbColor);
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => handleGenerateColor()}>Generate random color</button>
      <button onClick={() => setType("hex")}>Generate HEX color</button>
      <button onClick={() => setType("rgb")}>Generate RGB color</button>

      <h1
        style={{
          background: "white",
          color: "black",
        }}
      >
        {colorStr}
      </h1>
    </div>
  );
}
