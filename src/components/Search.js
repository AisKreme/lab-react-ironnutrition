import React from 'react';

function Search(props) {
  return (
    <div>
      <input
        onChange={props.btnSearch}
        className="input"
        type="text"
        placeholder="Search Food"
      />
    </div>
  );
}

export default Search;
