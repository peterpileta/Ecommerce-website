import React from 'react'
import './checkout.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const Checkout = () => {
    return (
        <div>
            <span id='checkout-land'>Sorry, nothing for sale!</span>
            <Link to='/Ecommerce-website'><Button variant='contained' id='checkout-button'>Go back</Button></Link> 
        </div>
    )
}

export default Checkout;