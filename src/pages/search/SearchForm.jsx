import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [query, setQuery] = useState("");
  const pathSearched = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    pathSearched(`articles?q=${query}`);
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="search">
          <input
            type="text"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            value={query}
          />
          <button>Search</button>
        </label>
      </form>
    </div>
  );
}
