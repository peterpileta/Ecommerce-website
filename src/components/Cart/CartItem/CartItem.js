import React, {useState} from 'react'
import { connect } from 'react-redux'
import {removeFromCart, adjustQty} from '../../../redux/Shopping/shopping-actions'
import './cartitem.css'

const CartItem = ({itemData, removeFromCart, adjustQty}) =>  {
    const [input, setInput] = useState(itemData.quantity)
    const onChangeHandler = (e) => {
        setInput(e.target.value)
        adjustQty(itemData.id, e.target.value)
    }

    return (
        <div className='cartItem'>
            <img className='cartItem-image' src={itemData.image} alt={itemData.title}></img>
            <div className='cartItem-details'>
                <p className='cart-details-title'>{itemData.title}</p>
                <p className='cart-details-description'>{itemData.description}</p>
                <p className='cart-details-price'>${itemData.price}</p>
            </div>
            <div className='cartItem-actions'>
                <div>
                    <label htmlFor='quantity'>Qty</label>
                    <input 
                        min='1' 
                        type='number'            
                        value={input}
                        onChange={onChangeHandler}
                    />
                </div>
                <button onClick={() => removeFromCart(itemData.id)}>Remove</button>
                <img src='' alt=''></img>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
            removeFromCart: (id) => {
                dispatch(removeFromCart(id));
            },
            adjustQty: (id, value) => {
                dispatch(adjustQty(id,value));
            }
        }
    }


export default connect(null, mapDispatchToProps)(CartItem)