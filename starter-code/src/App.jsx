import React, { Component } from 'react';
import './App.css';
import FiltereableProductTable from './components/FiltereableProductTable';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <FiltereableProductTable></FiltereableProductTable>
      </div>
    );
  }
}
