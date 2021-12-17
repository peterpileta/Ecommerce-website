import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './Navbar.css'


const Navbar = ({cart}) => {
    const [cartCount, setCartCount] = useState()    

    useEffect(() => {
        let count=0;
        cart.forEach((item) => {
            count += item.quantity
        });

        
        setCartCount(count);
    },[cart, cartCount] )

    return (
        <div className='navbar'>
            <Link to='/Ecommerce-website' className='navbar-logo-link'>
            <h2 className='navbar-header'>Peter's E-commerce Mock Site</h2>
            </Link>

            <Link to='/cart'>
                <div className='navbar-cart'>
                    <p className='cart-title'>Cart</p>
                    <img className='cart-img' src='https://cdn-icons-png.flaticon.com/512/263/263142.png' alt='shopping-cart'/>
                    <span>{cartCount}</span>
                </div>
            </Link>

        </div>
    )
} 

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Navbar)