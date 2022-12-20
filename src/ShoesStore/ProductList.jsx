import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderShoesList = () => {
    return this.props.shoesList.map((shoes) => {
      return (
        <div className="col-3 mt-2" key={shoes.id}>
          <ProductItem shoes={shoes} showInfo={this.props.showInfo}/>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="row">
        {this.renderShoesList()}</div>
      
    );
  }
}
