import React, {useEffect, useState} from 'react'
import CartItem from './CartItem/CartItem'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import './cart.css'

const Cart = ({cart}) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)


    useEffect(() =>  {
        let items=0;
        let price=0;

        cart.forEach((item) => {
            items+= item.quantity;
            price+= item.price*item.quantity;
        })

        setTotalPrice(price);
        setTotalItems(items);

    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems])
    
    return (
        <div className='cart'>
            <div className='cart-items'>
                {cart.map((item) => {
                 return <CartItem key={item.id} itemData={item}/>
                })}
            </div>

            <div className='cart-summary'>
                <h4 className='summary-title'>Cart Summary</h4>
                <div className='summary-price'>
                    <p>Total items: {totalItems}</p>
                    <p>Total price: ${totalPrice}</p>
                </div>
                <Link to='/checkout'><Button variant ='contained' className='button'>Checkout</Button></Link>
            </div>
        </div>
    )
} 

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Cart);