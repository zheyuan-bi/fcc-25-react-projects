import useLocalStorage from "./useLocalStorage";
import "./styles.css";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <>
      <div className="container" data-theme={theme}>
        <p>hello world</p>
        <button onClick={handleToggleTheme}>change theme</button>
      </div>
    </>
  );
}
