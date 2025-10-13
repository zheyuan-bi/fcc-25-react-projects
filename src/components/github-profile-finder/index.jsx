import { useState, useEffect } from "react";
import User from "./user";

export default function GithubProfileFinder() {
  const [data, setData] = useState(null);
  const [userName, setUserName] = useState("zheyuan-bi");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit() {
    try {
      setIsLoading(true);
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const result = await response.json();

      console.log(response);
      if (response.ok) {
        setData(result);
        setErrorMsg("");
        setUserName("");
      } else {
        setErrorMsg(result.message || "user not found");
        setData(null);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setErrorMsg(error.message);
      setIsLoading(false);
    }
  }

  useEffect(() => console.log(data), [data]);

  return (
    <div className="profile-container">
      <div className="input-container">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search Github username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {isLoading ? <p>Loading data...</p> : errorMsg ? <p>{errorMsg}</p> : data ? <User user={data} /> : null}
    </div>
  );
}
