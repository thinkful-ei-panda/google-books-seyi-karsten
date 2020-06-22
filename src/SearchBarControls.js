import React from 'react';

class SearchBarControls extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="SearchBar__controls">
        <h2>Print Type:</h2>
        <select name="print" id="print">
          <option value="all">all</option>
          <option value="books">books</option>
          <option value="magazines">magazines</option>
        </select>

        <h2>Book Type:</h2>
        <select name="bookType" id="bookType">
          <option value="#">No Filter</option>
          <option value="partial">partial</option>
          <option value="full">full</option>
          <option value="free-ebooks">free-ebooks</option>
          <option value="paid-ebooks">paid-ebooks</option>
          <option value="ebooks">ebooks</option>
        </select>
      </div>
    );
  }
}

export default SearchBarControls;
