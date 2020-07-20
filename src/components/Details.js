import React, {Component} from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';


export default class Details extends Component{
    render(){
        return(
            <div>
                <ProductConsumer>
                { 
                    value => {
                    const {id,company, img, price, title, info, inCart} = value.detailProduct;
                    
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto  text-center text-blue  my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto my-3">
                                    <img className ="img-fluid" src={img} alt={title} />
                                </div>
                                <div className="col-10 mx-auto my-3 text-capitalize">
                                    <h2>model: {title}</h2>
                                    <h4 className="text-title text-uppercase mt-3 mb-2">made by: 
                                    <span className="text text-uppercase">{company}</span></h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price:
                                            <span>$</span>{price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        some info about the product<p className="text-muted lead">{info}</p>
                                    </p>
                                    <div>
                                        <Link to='/'>
                                            <button>back to product</button>
                                        </Link>
                                        <button disabled = { inCart ? true: false}
                                                onClick = {(e) => {value.addToCart(id); value.openModal(id  )}}>
                                        {
                                            inCart ? 'inCart' : 'add to cart'
                                        }
                                        </button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
                </ProductConsumer>
            </div>
        )
    }
}
