import React, { Component } from "react";
import Child from "../Child/Child";
class Parent extends Component {
  state = {
    userName: "abdallah",
    age: 25,
    products: [
      {
        title: "apple TV",
        price: 120000,
        category: "TV",
      },
      {
        title: "TOSHIBA TV",
        price: 23000,
        category: "TV",
      },
      {
        title: "LG TV",
        price: 25000,
        category: "TV",
      },
      {
        title: "MG TV",
        price: 14000,
        category: "TV",
      },
      {
        title: "SONY",
        price: 45000,
        category: "TV",
      },
    ],
  };
  
  updatePrice = (itemIndex) => {
    
    console.log("Hello from Update price", itemIndex);
    
    let products = [...this.state.products];
    
    products[itemIndex].price += 10;
    
    this.setState({ products });
    
    localStorage.setItem("products", JSON.stringify(products));
  };
  
  deleteProduct = (itemIndex) => {
    console.log("Hello from detele product", this.state.products[itemIndex]);
      let products = [...this.state.products];
      products.splice(itemIndex, 1);
      this.setState({ products });
    localStorage.setItem("products", JSON.stringify(products));
  };
  addProduct = () => {
    const newProduct = {
      title: "Samsung tv",
      price: 10000,
      category: "TV",
    };


    const products = [...this.state.products];

    products.push(newProduct);

    this.setState({ products });

    localStorage.setItem("products", JSON.stringify(products));
  };

  componentDidMount() {
    const storedProducts = localStorage.getItem("products");

    if (storedProducts) {
      this.setState({ products: JSON.parse(storedProducts) });
    }
  }

  render() {
    return (
      <div className="bg-danger p-3">
        <h1>Parent</h1>
        <button className="btn btn-success" onClick={this.addProduct}>
          Add Product
        </button>
        <div class="row row-cols-1 row-cols-md-5">
          {this.state.products.map((product, index) => (
            <Child
              productDetails={product}
              key={index}
              index={index}
              updatePriceHandler={this.updatePrice}
              deleteProductHandler={this.deleteProduct}
              products={this.state.products}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Parent;
