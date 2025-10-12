import { useState, useEffect } from "react";
import "./styles.css";

export default function ScrollIndicator({ url }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(url) {
    try {
      setLoading(true);

      const response = await fetch(url);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        console.log(data.products);
        setProducts(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  function handleScroll(event) {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );

    const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    setScrollPercentage((100 * scrolled) / height);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="top-container">
        <h1>scroll indicator</h1>
        <div className="scroll-container">
          <div className="scroll-progress" style={{ width: `${scrollPercentage}%` }}></div>
        </div>
      </div>

      <div className="data-container">
        {products && products.length > 0 ? products.map((product) => <p key={product.id}>{product.title}</p>) : null}
      </div>
      {loading ? <span>loading data...</span> : null}
      {errorMsg ? <p>{errorMsg}</p> : null}
    </>
  );
}
