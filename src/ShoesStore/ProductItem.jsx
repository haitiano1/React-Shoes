import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    let {image,name,price} = this.props.shoes;
    return (
      <div className="card">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">${price.toLocaleString()}</p>
              <a
                href="#"
                data-toggle="modal"
                data-target="#exampleModal"
                className="btn btn-primary" onClick={() => {
                        this.props.showInfo(this.props.shoes)
                    }}>
                View
              </a>
            </div>
          </div>
    )
  }
}
