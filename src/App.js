import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Details from './components/Details';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Modal from './components/Modal';
import Default from './components/Default';

function App() {
  return (
  <React.Fragment>
    <Navbar></Navbar>
    <Switch>
      <Route path="/details" component={Details} />
      <Route path="/cart" component={Cart} />
      <Route path="/" component={ProductList}/>
      <Route component={Default} />      
    </Switch>
    <Modal></Modal>
  </React.Fragment>
  );
}

export default App;
