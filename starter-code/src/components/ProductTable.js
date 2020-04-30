import React, { Component } from 'react';
import ProductRow from './ProductRow';
import data from '../data.json';
import './ProductTable.css'

class ProductTable extends Component {

  constructor(props) {
    super(props);
    this.arrElements = data.data;
    this.selectedDataElements = []
  }

  filteringFromData = (text, checked) => {
    console.log(text);
    if (checked === true) {
      this.selectedDataElements = this.arrElements.filter((element) => {
        return (element.stocked === true && element.name.includes(text));
      })
    } else {
      this.selectedDataElements = this.arrElements.filter((element) => {
        return (element.name.includes(text));
      })
    }
  }

  render() {
    return (
      <div className="ProductTable">
        {
          this.filteringFromData(this.props.textInfo, this.props.checkedInfo)
        }
        <div className="table-container">
          <table>
            <tr>
              <td>Name</td>
              <td>Price</td>
            </tr>
            {
              this.selectedDataElements.map((element, idx) => {
                return (
                  <ProductRow
                    key={idx}
                    name={element.name}
                    price={element.price}
                  >
                  </ProductRow>
                )
              })
            }
          </table>
        </div>
      </div>
    );
  }
}

export default ProductTable;
