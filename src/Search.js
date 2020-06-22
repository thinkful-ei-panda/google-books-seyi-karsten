import React from 'react';
import SearchBarControls from './SearchBarControls';
class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const book = this.props.books;
    console.log(book);
    return (
      <div className="SearchBar">
        <div className="SearchBar__heading">
          {' '}
          <h2>Search:</h2>
          <input type="text" id="book" required />
          <button type="submit">Search</button>
        </div>
        <SearchBarControls book={this.props.books} />
      </div>
    );
  }
}

export default Search;
