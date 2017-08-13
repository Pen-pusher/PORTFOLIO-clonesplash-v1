import React, { Component } from 'react';
import Header from './components/Header/Header';
import router from './routing/router';

class App extends Component {
  render() {
    return (
      <nav className="app-wrapper">
        <Header />
        {router}
      </nav>
    );
  }
}

export default App;
