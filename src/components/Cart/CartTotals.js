import React from 'react';
import {Link} from 'react-router-dom';

export default function CartTotals({value}){
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className= "col-12 text-capitalize text-right">
                        <Link to ='/'>
                        <button className="btn btn-outline-danger text-uppercase mb-3 px-5">
                            clear cart
                        </button>
                        </Link>
                        <h5>
                            <span className="text-title">
                            cart subtotal:</span>
                            <strong> $ {cartSubTotal}</strong>
                        </h5> 
                        <h5>
                            <span className="text-title">
                            cart tax:</span>
                            <strong> $ {cartTax}</strong>
                        </h5> 
                        <h5>
                            <span className="text-title">
                            cart Total:</span>
                            <strong> $ {cartTotal}</strong>
                        </h5> 
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}