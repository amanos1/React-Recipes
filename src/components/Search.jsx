import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const [tex, setText] = useState("");
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tex) {
      setSearchTerm(tex);
      setText("");
    }
  };

  const handleRandomMeal = () => {
    setSearchTerm("");
    setText("");
    fetchRandomMeal();
  };

  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          onChange={handleChange}
          value={tex}
        />
        <button className="btn" type="submit">
          Search
        </button>
        <button
          className="btn btn-hipster"
          type="btn"
          onClick={handleRandomMeal}
        >
          Suprise Me!
        </button>
      </form>
    </header>
  );
};

export default Search;
