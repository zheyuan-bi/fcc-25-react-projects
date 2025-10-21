import useWindowResize from ".";

export default function UseWindowResizeTest() {
  const { width, height } = useWindowResize();

  return (
    <div>
      <h1>use window resize hook</h1>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
}
