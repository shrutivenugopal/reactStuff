import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import {ProductConsumer} from '../context';

export default class Product extends Component{

    render(){
        const {id, title, img, price, inCart} = this.props.product;
        return(
        <div className="mx-auto col-9 col-md-6 col-lg-5 my-3">
            <div className="card">
                <ProductConsumer>
                    {(value) => (
                         <div className="img-container my-3" onClick={(e) => {value.handleDetail(id)}}>
                         <Link to='/details'>
                             <img src={img} alt={title}/>
                         </Link>
                         <button className="cart-btn" 
                                 disabled={inCart?true:false}
                                 onClick={(e)=>{value.addToCart(id); value.openModal(id)}}>
                             {inCart ? 
                                 <p className="text-capitalize mb-0" disabled>{" "}in cart</p>
                                 : <i className="fas fa-cart-plus"></i>}
                         </button>
                        
                     </div>
                    )}
               
                </ProductConsumer>
                <div className="cardFooter d-flex justify-content-between">
                    <p className="align-self-center mb-0">
                        {
                            title
                        }
                    </p>
                    <h5 className="text-blue font-italic mb-0">
                        <span className="mr-5">$ {price}</span>
                    </h5>
                </div>
                
            </div>
            
        </div>
        );  
    }
}

Product.propType = {
    product: PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        company:PropTypes.string,
        info:PropTypes.string,
        inCart:PropTypes.bool,
        count:PropTypes.number,
        total:PropTypes.number
    })
}