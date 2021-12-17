import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
    products: [
        {
            id:1,
            title: 'Desk fan',
            description: 'A regular desk fan',
            price: 15.0,
            image: 'https://pyxis.nymag.com/v1/imgs/c6f/9d4/bbb8b4bc6b8c64fe0e4f2f378cf5d97738-honeywell-ht-900-turboforce-air-circulat.rsquare.w600.jpg',
            quantity: 0
        },

        {
            id:2,
            title: 'Computer monitor',
            description: 'A regular computer monitor',
            price: 130.0,
            image: 'https://i.insider.com/5ff4df7ed184b30018aad2e3?width=1136&format=jpeg',
            quantity: 0

        },

        {
            id:3,
            title: 'Banana',
            description: 'A regular banana',
            price: 3.0,
            image: 'https://www.freshmix.ro/wp-content/uploads/2018/03/27057-banana-600x600.jpg',
            quantity: 0

        },

        
        {
            id:4,
            title: 'White t-shirt',
            description: 'A regular white t-shirt',
            price: 10.0,
            image: 'https://pyxis.nymag.com/v1/imgs/9aa/b7f/0b2bcd87ecdc80545622a833684a643539-white-tshirt.rsquare.w600.jpg',
            quantity: 0

        }

    ], //Array of objects with properties - title, description, price, id, quantity and image
    cart: [],
    currentItem: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            const item = state.products.find((prod) => prod.id === action.payload.id)

            const inCart = state.cart.find((item) => item.id === action.payload.id? true:false)
            return {
            ...state,
            cart: inCart? state.cart.map((prod) => prod.id === action.payload.id? {...prod, quantity: (prod.quantity + action.payload.quantity)} : prod ): [...state.cart, {...item, quantity: action.payload.quantity}]
            }

        case actionTypes.REMOVE_FROM_CART:
           
            return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id)
            }

        case actionTypes.ADJUST_QUANTITY:

            return {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload.id
                ? {...item, quantity: +action.payload.quantity} 
                : item)
                }
            
        case actionTypes.LOAD_CURRENT_ITEM:

            return {
                ...state,
                currentItem: action.payload
                }

            default: return state;
    }
}

export default shopReducer;