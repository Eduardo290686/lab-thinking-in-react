import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.text = '';
    this.checked = false;
  }

  handleText = (event) => {
    this.text = event.target.value;
    this.props.handleInfo(this.text, this.checked);
  }

  handleCheck = (event) => {
    if (this.checked === false) {
      this.checked = true;
    } else {
      this.checked = false;
    }
    this.props.handleInfo(this.text, this.checked);
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="input-container">
          <label>Search</label>
          <input onChange={(event) => this.handleText(event)}></input>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={(event) => this.handleCheck(event)}
          />
          <span>Only show products on stock</span>
        </div>
      </div>
    );
  }
}

export default SearchBar;
