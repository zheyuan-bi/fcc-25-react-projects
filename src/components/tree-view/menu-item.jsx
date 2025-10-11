import MenuList from "./menu-list";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [display, setDisplay] = useState(true);

  function handleToggleChildren(label) {}

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => setDisplay(!display)} style={{ cursor: "pointer" }}>
            {display ? <FaMinus size="25" /> : <FaPlus size="25" />}
          </span>
        ) : null}
      </div>

      {item && item.children && item.children.length > 0 ? (
        <div style={{ display: display ? "flex" : "none" }}>
          <MenuList list={item.children} />
        </div>
      ) : null}
    </li>
  );
}
