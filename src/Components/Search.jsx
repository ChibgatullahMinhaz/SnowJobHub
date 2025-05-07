import React from "react";

const Search = ({ setQuery }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.search.value)
    console.log(e.target);
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            name="search"
            className="grow"
            placeholder="Search"
          />
          <kbd className="kbd kbd-sm">⌘</kbd>
        </label>
      </form>
    </div>
  );
};

export default Search;
