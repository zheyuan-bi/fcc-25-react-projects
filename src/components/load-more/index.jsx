import { useState, useEffect } from "react";
import "./styles.css";

export default function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${count}`);
      const data = await response.json();
      console.log(data);

      if (data && data.products && data.products.length > 0) {
        setProducts((prev) => [...prev, ...data.products]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products.map((product) => {
          const { id, title, price, thumbnail } = product;
          return (
            <div className="product" key={id}>
              <img src={thumbnail} alt="" />
              <p>{`${id} ${title}, $${price}`}</p>
            </div>
          );
        })}
      </div>

      {loading && <div className="loading">Loading data...</div>}

      <div className="button-container">
        <button className="next-button" onClick={() => setCount(count + 10)} disabled={count === 40}>
          Load 10 more products
        </button>
        <div>{count === 40 ? "You' reached 50 products" : null}</div>
      </div>
    </div>
  );
}
