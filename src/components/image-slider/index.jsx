import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider({ url, page = 1, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(url) {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();
      console.log(data);

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) return <div>Loading data</div>;

  if (errorMsg !== null) return <div>Error occured: {errorMsg}</div>;

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left"></BsArrowLeftCircleFill>
      {images.length > 0
        ? images.map((image, index) => (
            <img
              src={image.download_url}
              key={image.id}
              alt=""
              className={currentSlide === index ? "current-image" : "hide-image"}
            />
          ))
        : null}
      <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right">
        {" "}
      </BsArrowRightCircleFill>
      <span className="circle-indicators">
        {images.length > 0
          ? images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={currentSlide === index ? "indicator active-indicator" : "indicator"}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
