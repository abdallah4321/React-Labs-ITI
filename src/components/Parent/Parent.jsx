import React, { Component } from "react";
import Child from "../Child/Child";

class Parent extends Component {
  state = {
    products: [
      {
        name: "toshiba",
        price: 1200,
        model: "Tv",
      },
      {
        name: "LG",
        price: 1400,
        model: "Tv",
      },
      {
        name: "oppo",
        price: 5000,
        model: "phone",
      },
      {
        name: "iphone",
        price: 15000,
        model: "phone",
      },
      {
        name: "nokia",
        price: 2000,
        model: "phone",
      },
      {
        name: "realme",
        price: 4000,
        model: "phone",
      },
    ],
  };
  componentDidMount() {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    this.setState({ products: storedProducts });
  }
  updatePrice = (itemIndex) => {
    console.log("hello", this.state);
    let products = [...this.state.products];
    products[itemIndex].price += 10;
    this.setState({ products });
  };
  deleteProduct = (itemIndex) => {
    console.log("pdouct deleted");
    let products = [...this.state.products];
    products.splice(itemIndex, 1);
    this.setState({ products });
  };
  addProduct = () => {
    const newProduct = {
      name: "New Product",
      price: 10000, 
      model: "phone", 
    };

  this.setState((prevState) => {
    const updatedProducts = [...prevState.products, newProduct];
    
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    return { products: updatedProducts };
  });
  };
  render() {
    return (
      <div className="bg-danger p-5">
        <h1> Parent</h1>
        <button className='btn btn-dark p-2 mt-1 w-25 ms-3 mb-3' onClick={this.addProduct}>add</button>
        <div className="row gy-4">
          {this.state.products.map((product, index) => (
            <Child
              key={index}
              productDetails={product}
              index={index}
              updatePriceHandle={() => this.updatePrice(index)}
              deleteProductHandle={() => this.deleteProduct(index)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Parent;
