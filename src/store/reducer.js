
import { act } from 'react-dom/test-utils'
import Picture from '../asset/Picture.svg'
import productList from '../page/productList'



const initialState = {
    counter: 0,
    cart: [],
    productDetail: [],
    productList: [
        {
            id : 1,
            name : 'Item Type/ Name',
            type: 'Color',
            image : Picture,
            category : 'ADVENTURE',
            price : 19.99,
            priceStrikethough : 39.99,
            descname: 'Kacamata tampan dan berani',
            desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen`,
            size: 'medium',
            source: ' 100% Cotton',
            gender:' Mens',
            qty: 0
        },
        {
            id : 2,
            category : 'ADVENTURE',
            name : 'Item Type/ Name 2',
            type: 'Color',
            image : Picture,
            price : 19.99,
            priceStrikethough : 39.99,
            descname: 'Kacamata tampan dan berani',
            desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen`,
            size: 'medium',
            source: ' 100% Cotton',
            gender:' Mens',
            qty: 0
        },
        {
            id : 3,
            category : 'ADVENTURE',
            name : 'Produk 3',
            type: 'Color',
            image : Picture,
            price : 19.99,
            priceStrikethough : 39.99,
            descname: 'Kacamata tampan dan berani',
            desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen`,
            size: 'medium',
            source: ' 100% Cotton',
            gender:' Mens',
            qty: 0
        },
        {
            id : 4,
            category : 'ADVENTURE',
            name : 'Item Type/ Name 4',
            type: 'Color',
            image : Picture,
            price : 19.99,
            priceStrikethough : 39.99,
            descname: 'Kacamata tampan dan berani',
            desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen`,
            size: 'medium',
            source: ' 100% Cotton',
            gender:' Mens',
            qty: 1
        },
        {
            id : 5,
            category : 'ADVENTURE',
            name : 'Item Type/ Name 3',
            type: 'Color',
            image : Picture,
            price : 19.99,
            priceStrikethough : 39.99,
            descname: 'Kacamata tampan dan berani',
            desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen`,
            size: 'medium',
            source: ' 100% Cotton',
            gender:' Mens',
            qty: 1
        },
        {
            id : 6,
            category : 'ADVENTURE',
            name : 'Item Type/ Name 3',
            type: 'Color',
            image : Picture,
            price : 19.99,
            priceStrikethough : 39.99,
            descname: 'Kacamata tampan dan berani',
            desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen`,
            size: 'medium',
            source: ' 100% Cotton',
            gender:' Mens',
            qty: 0
        },
        {
            id : 7,
            category : 'ADVENTURE',
            name : 'Item Type/ Name 3',
            type: 'Color',
            image : Picture,
            price : 19.99,
            priceStrikethough : 39.99,
            descname: 'Kacamata tampan dan berani',
            desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen`,
            size: 'medium',
            source: ' 100% Cotton',
            gender:' Mens',
            qty: 0
        }

        
    ]
}

const reducer = (state = initialState, action) => {
    // if(action.type === 'ADD_CHART') {
    //     return {...state, counter: state.counter + 1}
    // };

    switch(action.type){
        case 'GET_PRODUCT_DETAIL_ID':
            const findProduct = state.productList.find(produk => String(produk.id) === String(action.payload))
            console.log(state.productList)
            console.log(action.payload)
            console.log(findProduct)
            if (findProduct) {
                return {
                    ...state,
                    productDetail: findProduct
                }
            } else {
                return {
                    ...state,
                    productDetail: null
                }
            }
            case 'ADD_PRODUCTDETAIL_TO_CART':
                
                console.log(state.cart.length)
                if(state.cart.length != 0) {
                    const Product = state.cart.find(produk => String(produk.id) === String(action.payload.id))
                    if(!Product){
                        return {
                            ...state,
                            cart: [...state.cart, action.payload]
                        }
                    } 
                } else {
                        return {
                            ...state,
                            cart: [...state.cart, action.payload]
                            
                        }
                       
                }
         case 'INCREMENT_PRODUCT': {
                let carts = state.cart
                const findIndex = state.cart.findIndex(produk => String(produk.id) === String(action.payload.id))
                console.log(findIndex)
                console.log(state.cart[findIndex])
                console.log(carts[findIndex])

                if(findIndex >= 0) {
                    carts[findIndex].qty = carts[findIndex].qty + 1
                }
                return {
                    ...state,
                    cart: carts
                    
                }
         }
                
              
                
    }
   
    return state
}

export default reducer
