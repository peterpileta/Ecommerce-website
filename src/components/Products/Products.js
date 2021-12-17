import React from 'react'
import Product from './Product'
import { connect } from 'react-redux'
import './product.css'
import { Redirect, useHistory } from 'react-router'


const Products = ({products, currentItem}) => {
    let history = useHistory();

    {/*Replaces github pages trailing slash in URL*/}
    if (window.location.href.slice(-1) == '/') return <Redirect to ='/Ecommerce-website' />

    return (
        <div className='frontpage'>
        <div className="product-grid">
            {products.map((prod) => <Product key = {prod.id} productData ={prod} />)}
        </div>
        <button onClick= {()=> {history.push('/cart')}}>Go to cart</button>
        <footer>Author - Peter Pileta</footer>
        </div>
    )
    }

    const mapStateToProps = (state) => {
        return {
            products: state.shop.products,
            currentItem: state.shop.currentItem
        }

    }

    export default connect(mapStateToProps)(Products)