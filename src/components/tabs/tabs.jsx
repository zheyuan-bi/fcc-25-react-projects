import { useState } from "react";

export default function Tabs({ tabsContent, onChange }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(tabsContent);

  function handleOnClick(index) {
    setCurrentIndex(index);
    onChange(index);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tab, index) => (
          <div
            className={"tab-item" + (currentIndex === index ? " active" : "")}
            key={tab.label}
            onClick={() => handleOnClick(index)}
          >
            <span>{tab.label}</span>
          </div>
        ))}
      </div>

      <div className="content">{tabsContent[currentIndex] && tabsContent[currentIndex].content}</div>
    </div>
  );
}
