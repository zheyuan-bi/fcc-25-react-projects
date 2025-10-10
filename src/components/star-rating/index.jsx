import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "./styles.css";

export default function StarRating({ numberOfStars = 10 }) {
  const [ratedPosition, setRatedPosition] = useState(0);
  const [hoveredPosition, setHoveredPosition] = useState(0);
  const [interaction, setInteraction] = useState("inactive");

  function handleClick(currentIndex) {
    setInteraction("rated");
    setRatedPosition(currentIndex);
  }

  function handleMouseMove(currentIndex) {
    if (interaction !== "rated" || currentIndex !== ratedPosition) {
      setInteraction("hovered");
      setHoveredPosition(currentIndex);
    }
  }

  function handleMouseLeave() {
    setInteraction("inactive");
  }

  return (
    <div className="star-rating">
      {[...Array(numberOfStars)].map((_, index) => {
        const position = index + 1;
        let currentClassName;

        if (interaction === "hovered" && position <= hoveredPosition) {
          currentClassName = "hovered";
        } else if ((interaction === "rated" || interaction === "inactive") && position <= ratedPosition) {
          currentClassName = "rated";
        }

        return (
          <FaStar
            key={index}
            onClick={() => handleClick(position)}
            onMouseMove={() => handleMouseMove(position)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
            className={currentClassName}
          ></FaStar>
        );
      })}
    </div>
  );
}
