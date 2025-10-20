import useFetch from ".";

export default function UseFetchHookTest() {
  const { data, errorMsg, isLoading } = useFetch("https://dummyjson.com/products", {});

  console.log(data, errorMsg, isLoading);

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {errorMsg ? (
        <p>{errorMsg}</p>
      ) : isLoading ? (
        <h3>Loading... Bratha please wait</h3>
      ) : data && data.products && data.products.length > 0 ? (
        data.products.map((product) => <div key={product.id}>{product.title}</div>)
      ) : null}
    </div>
  );
}
