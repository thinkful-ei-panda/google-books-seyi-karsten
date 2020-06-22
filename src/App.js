import React from 'react';
import './App.css';
import Search from './Search';
import List from './List';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <Search />
        <List />
      </div>
    );
  }
}

export default App;
