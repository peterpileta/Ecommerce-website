import {React, useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart'
import SingleItem from './components/SingleItem/SingleItem';
import Checkout from './components/Checkout/Checkout';
import { connect } from 'react-redux';
import './app.css';

function App({currentItem}) {

  return (
    <div className='app'>
      <Router>
        <Navbar />  {/* Navbar component */}
        <Switch>
          <Route exact path='/Ecommerce-website' component={Products}/>
          <Route exact path='/product/:id' component={SingleItem} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem
  }
} 

export default connect(mapStateToProps)(App)