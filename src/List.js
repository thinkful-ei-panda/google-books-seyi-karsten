import React from 'react';
import Books from './Books';

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const books = this.props.books;
    console.log(this.props.books);

    return <Books book={this.props.books} />;
  }
}

export default List;
