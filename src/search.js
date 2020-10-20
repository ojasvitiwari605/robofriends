import React from "react";

const Search = ({ searchchange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba bg--green bg-lightest-blue "
        type="search"
        placeholder="search robots"
        onChange={searchchange}
      />
    </div>
  );
};

export default Search;
