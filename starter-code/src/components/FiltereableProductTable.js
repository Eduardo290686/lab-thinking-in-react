import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ProductTable from './ProductTable';
import './FiltereableProductTable.css';

class FiltereableProductTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textInfo: '',
      checkedInfo: false
    }


  }

  handleInfo = (text, checked) => {
    this.setState({
      textInfo: text,
      checkedInfo: checked
    })
  }

  render() {
    return (
      <div className="FiltereableProductTable">
        <h1>Ironstore</h1>
        <SearchBar
          handleInfo={this.handleInfo}
        >
        </SearchBar>
        <ProductTable
          textInfo={this.state.textInfo}
          checkedInfo={this.state.checkedInfo}
        >
        </ProductTable>
      </div>
    );
  }
}

export default FiltereableProductTable;
