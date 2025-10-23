import { useRef, useState } from "react";

export default function ScrollToSection() {
  const refs = useRef([]);
  const inputRef = useRef(0);

  function generateRandomRgbColor() {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    return `rgb(${randomR}, ${randomG}, ${randomB})`;
  }

  const data = Array(1000)
    .fill(null)
    .map((_, index) => ({
      label: `Card ${index + 1}`,
      style: { width: "100%", height: "600px", backgroundColor: generateRandomRgbColor() },
    }));

  function handleScroll() {
    const element = refs.current[inputRef.current.value - 1];
    const pos = element.offsetTop;
    window.scrollTo({ top: pos, behavior: "smooth" });
  }

  function handleChange(event) {
    const target = Number(event.target.value);
    const verifiedTarget = Math.max(1, Math.min(data.length, target));
    inputRef.current.value = verifiedTarget;
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") handleScroll();
  }

  return (
    <>
      <h1>scroll to section</h1>
      <div style={{ position: "fixed", top: 10, right: 10, display: "flex", gap: "30px", zIndex: 10 }}>
        <input
          type="number"
          ref={inputRef}
          min={1}
          max={data.length}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <button onClick={handleScroll} className="scroll-to-button">
          {`scroll`}
        </button>
      </div>

      {data.map((dataItem, index) => (
        <div ref={(el) => (refs.current[index] = el)} key={index} style={dataItem.style}>
          <span style={{ backgroundColor: "black", color: "white", padding: "0 5px" }}>{dataItem.label}</span>
        </div>
      ))}
    </>
  );
}
