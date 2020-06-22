import React from 'react';
import ReactDOM from 'react';
import './App.css';
import Search from './Search';
import List from './List';
//import Store from './Store';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      error: '',
    };
    //this.state = { ...Store };
  }
  handleSubmit(e) {
    e.preventDefault();
    const result = (({ title, printType }) => ({ title, printType }))(
      this.state
    );
  }

  componentDidMount() {
    const url =
      'https://www.googleapis.com/books/v1/volumes?q=${Search}+intitle:';
    const options = {
      method: 'GET',
      redirect: 'follow',
    };
    console.log('component');

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          books: data,
          error: null,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  }
  render() {
    // console.log(this.state.books.items);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <Search books={this.state.books.items} />

        <List books={this.state.books.items} />
      </div>
    );
  }
}

export default App;
