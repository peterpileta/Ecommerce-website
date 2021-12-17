import React, { useState } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { addToCart, loadCurrentItem } from '../../redux/Shopping/shopping-actions'
import './product.css'
import { useHistory } from 'react-router-dom'
import {Button} from '@mui/material'

const Product = ({productData, addToCart, loadCurrentItem}) => {
    let history=useHistory();
    const [qty, setQty] = useState(1);

    const onChangeHandler = (e) => {
        setQty(parseInt(e.target.value))
        
    }

   
    return (
        <div className='product'>
                <img className='product-img' src={productData.image} alt=''></img>
                
                <div className='product-details'>
                    <p className='product-title'>{productData.title}</p>
                    <p className='product-description'>{productData.description}</p>
                    <p className='product-price'>${productData.price}</p>
                </div>

                <div className='product-buttons'>
                    <Button color='info' className='button' variant='contained' onClick={() => {loadCurrentItem(productData);
                                        history.push(`product/${productData.id}`)}}>View item</Button>
                    <div><label>Qty: </label>
                         <input 
                            min='1' 
                            type='number' 
                            value={qty}
                            onChange={onChangeHandler}
                            />
                    </div>
                    <Button variant='contained' color='success' className='button' onClick={() => addToCart(productData.id, qty)}>Add to cart</Button>
                </div>
        
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id, quantity) => dispatch(addToCart(id, quantity)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
        
    }
}

export default connect(null, mapDispatchToProps)(Product)