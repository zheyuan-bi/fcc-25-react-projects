import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import "./styles.css";

export default function ScrollToTop() {
  const { data, errorMsg, isLoading } = useFetch("https://dummyjson.com/products", {});
  const [pageYOffset, setPageYOffset] = useState(0);
  const scrollHeight = document.body.scrollHeight;
  const isNearTop = pageYOffset < 50;
  const isNearBottom = pageYOffset + window.innerHeight >= scrollHeight - 50;

  console.log(scrollHeight);
  function handleScroll() {
    setPageYOffset(window.pageYOffset);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div style={{ position: "fixed", backgroundColor: "black", color: "white", minWidth: "100px" }}>
        {pageYOffset}
      </div>

      <button
        className={`downButton ${isNearBottom ? " isHidden" : ""}`}
        onClick={() => window.scrollTo({ top: scrollHeight, behavior: "smooth" })}
      >
        &darr;
      </button>

      <button
        className={`upButton ${isNearTop ? " isHidden" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        &uarr;
      </button>

      {isLoading ? (
        <p>loading data</p>
      ) : errorMsg ? (
        <p>{errorMsg}</p>
      ) : (
        data &&
        data.products &&
        data.products.map((product) => (
          <div key={product.id}>
            <h1>{product.title}</h1>
          </div>
        ))
      )}
    </>
  );
}
