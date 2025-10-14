import { useState, useEffect } from "react";
import Suggestions from "./suggestions";

export default function SearchAutocomplete() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      console.log("bro");
      const filteredData = users && users.length ? users.filter((user) => user.toLowerCase().indexOf(query) > -1) : [];
      console.log(filteredData);
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      console.log("not bro");
      setFilteredUsers([]);
      setShowDropdown(false);
    }
  }

  function handleClick(event) {
    console.log(event.target.innerText);
    setSearchParam(event.target.innerText);
    setShowDropdown(false);
    setFilteredUsers([]);
  }

  async function fetchUsers() {
    try {
      setIsLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length > 0) {
        setUsers(data.users.map((user) => user.firstName));
        setErrorMsg(null);
      } else {
        setUsers([]);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setErrorMsg(error);
      setIsLoading(false);
      setUsers([]);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users);

  return (
    <div className="container">
      <input
        value={searchParam}
        type="text"
        name="search-sers"
        placeholder="Search users here"
        onChange={handleChange}
      />

      {isLoading ? (
        <div>Loading data....</div>
      ) : errorMsg ? (
        <div>{errorMsg}</div>
      ) : showDropdown && filteredUsers && filteredUsers.length ? (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      ) : null}
    </div>
  );
}
