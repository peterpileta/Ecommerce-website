import React from 'react'
import { connect } from 'react-redux'
import {addToCart} from '../../redux/Shopping/shopping-actions'
import { useParams, Redirect } from 'react-router-dom'
import { Button } from '@mui/material'
import './singleitem.css'
/*************
View item Page
*************/
const SingleItem = ({currentItem, addToCart}) => {
const {id} = useParams();
    
    if (!currentItem) return <Redirect to ='/Shopping-mock-web-app' />

    return (
        <div className='singleItem'>
            <img className='singleItem-image' src={currentItem.image} alt={currentItem.title} />
            <div className='singleItem-details'>
                    <p className='details-title flex'>{currentItem.title}</p>
                    <p className='details-description flex'>{currentItem.description}</p>
                    <p className='details-price flex'>${currentItem.price}</p>
                    <div className='details-addButton flex'>
                        <Button className='button' variant='contained' color='success' onClick={() => addToCart(currentItem.id, 1)}>Add to cart</Button>
                    </div>
            
                
            </div>
        </div>
    )
} 

const mapStateToProps = (state) =>  {
    return {
    currentItem: state.shop.currentItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id, quantity) =>  {
            dispatch(addToCart(id, quantity))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem)