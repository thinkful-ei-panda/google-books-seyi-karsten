import React from 'react';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
    };
  }
  render() {
    return (
      <div className="book">
        <ul>
          <li>{this.state.book}</li>
        </ul>
      </div>
    );
  }
}
export default Books;
