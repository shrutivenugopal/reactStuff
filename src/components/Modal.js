import React, {Component} from 'react';
import { ProductConsumer } from '../context';
import {Link} from 'react-router-dom';  

export default class Modal extends Component{
    render(){
        return(
            <div>
                <ProductConsumer>
                {
                    (value) => {
                        const {modalOpen} = value;
                        const {title, img, price} = value.modalProduct;
                        if(!modalOpen){
                            return null;
                        }
                        else{
                        return(
                            <div className="modalContainer">
                                <div className="row">
                                    <div id="modal" 
                                        className="col-8 mx-auto col-md-6 text-center p-5 text-centralize">
                                        <h5>item added to cart</h5>
                                        <img src={img} className="img-fluid" alt={title}/>
                                        <h5>{title}</h5>                                        
                                        <h5 className="text-muted">price: $ {price}</h5>
                                        <Link to='/'>
                                            <button onClick={(e) => value.closeModal()}>continue shopping</button>
                                        </Link>
                                        <Link to='/cart'>
                                            <button onClick={(e) => value.closeModal()}>go to cart</button>
                                        </Link>
                                       
                                    </div>
                                </div>
                            </div>
                        )
                    }}
                }    
                </ProductConsumer>                
            </div>
        )
    }
}