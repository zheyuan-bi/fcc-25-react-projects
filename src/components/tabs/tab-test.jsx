import Tabs from "./tabs";
import "./tabs.css";

function RandomComponent() {
  return <h1>random content or something idk</h1>;
}

export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>content for tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>content for tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentIndex) {
    console.log(currentIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange}></Tabs>;
}
