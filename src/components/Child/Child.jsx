import React, { Component } from 'react';

class Child extends Component {
    render() {
    let {name , price , model } = this.props.productDetails;
        return (
            <div className="col-md-4">
            <div className='bg-info p-4'>
                <h2>Child</h2>
                <div className='p-4 text-center'>
                <h3>ProductName :{name}</h3>
                <h3>Productprice :{price}</h3>
                <h3>Productmodel :{model}</h3>
                <button className='btn btn-dark p-2 mt-1 w-100' onClick={()=>this.props.updatePriceHandle(this.props.index)}>increase</button>
                <button className='btn btn-dark p-2 mt-1 w-100' onClick={()=>this.props.deleteProductHandle(this.props.index)}>delete</button>
                </div>
                </div>
            </div>
        );
    }
}

export default Child;
