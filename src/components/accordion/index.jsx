// single selection

// multiple selection

import data from "./data";
import { useState } from "react";
import "./styles.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multipleSelectedIds, setMultipleSelectedIds] = useState([]);

  function handleSingleSelection(id) {
    id === selected ? setSelected(null) : setSelected(id);
  }

  function handleMultiSelection(id) {
    setMultipleSelectedIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>enable multi selection</button>
      <div className="accordion">
        {data.map((item) => (
          <div className="item" key={item.id}>
            <div
              onClick={() => (enableMultiSelect ? handleMultiSelection(item.id) : handleSingleSelection(item.id))}
              className="title"
            >
              <h3>{item.question}</h3>
              <span>+</span>
            </div>
            {(enableMultiSelect && multipleSelectedIds.includes(item.id)) ||
            (!enableMultiSelect && selected === item.id) ? (
              <div className="content">{item.answer}</div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
