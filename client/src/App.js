import React, { Component } from 'react';

import ShoppingList from './components/ShoppingLIst'
import AppNavbar from './components/AppNavbar'

//Importing the bootsrap
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <ShoppingList />
      </div>
    );
  }
}

export default App;
