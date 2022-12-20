import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    let { price, name,alias, shortDescription, quantity, image } = this.props.state
    return (
      <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Product Information
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row py-5">
                  <div className="col-4">
                    
                    <img className="img-fluid" src={image} />
                  </div>
                  <div className="col-8">
                    <h3>Information</h3>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Name:</td>
                          <td>{name}</td>
                        </tr>
                        <tr>
                          <td>Alias:</td>
                          <td>{alias}</td>
                        </tr>
                        <tr>
                          <td>Price:</td>
                          <td>{price}</td>
                        </tr>
                        <tr>
                          <td>Description:</td>
                          <td>{shortDescription}</td>
                        </tr>
                        <tr>
                          <td>Quantity:</td>
                          <td>{quantity}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
