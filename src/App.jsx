import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StarRating />
    </>
  );
}

export default App;
