import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMore from "./components/load-more";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LoadMore />
    </>
  );
}

export default App;
