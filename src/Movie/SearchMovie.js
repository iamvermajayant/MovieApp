import React from "react";

const SearchMovie = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        type="text"
        className="form-control"
        placeholder="Type to search"
        value={props.value}
        onChange={(event) => props.setSearch(event.target.value)}
      ></input>
    </div>
  );
};

export default SearchMovie;
