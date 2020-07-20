import React, {Component} from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component{

    state = {
        products: [],
        detailProduct:{},
        cart:[],
        modalProduct:detailProduct,
        modalOpen:false,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0
    }

    openModal = id => {
        const product = this.getItem(id);
        this.setState({modalProduct:product, modalOpen:true});
    }

    closeModal = () => {
        this.setState({modalOpen:false})
    }

    getItem = id => {
        const product = this.state.products.find((item) => item.id === id);
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id)
        this.setState({detailProduct:product})
    }

    addToCart = (id) => {
        const tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index];
        product.inCart=true;
        product.count=1;
        const price = product.proce;
        product.total = price;
        this.setState({products:tempProducts, cart:[...this.state.cart,product]}
        );
    };

    setProducts =() => {
        let products = [];
        storeProducts.map((item) => {
            const oneItem = {...item};
            products = [...products, oneItem]
            return item
        })
        this.setState({products});
    }

    increment =(id) =>{
        console.log("this is increment method")
    }

    decrement =(id) =>{
        console.log("this is decrement method")
    }

    removeItem =(id) => {
        console.log("remove the item");
    }

    clearCart = () => {
        console.log("cart was cleared");
    }

    componentDidMount(){
        this.setProducts();
    }
render(){
    return(
        <ProductContext.Provider value={
            {   ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart
            }
        }>
        {this.props.children}
        </ProductContext.Provider>
    )
}
}
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};