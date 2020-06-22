import React from 'react';
import SearchBarControls from './SearchBarControls';
class Search extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar__heading">
          {' '}
          <h2>Search:</h2>
          <input type="text" id="book" required />
          <button type="submit">Search</button>
        </div>
        <SearchBarControls />
      </div>
    );
  }
}

export default Search;
