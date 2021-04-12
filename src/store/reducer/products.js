
import Picture from '../../asset/Picture.svg'
import * as actionTypes from '../reducer/actions'


const initialState = {
    counter: 0,
    cart: [],
    productDetail: [],
    productList: [
        {
            id : 1,
            name : 'Item Type/ Name',
            slug: 'tips-blow-rambut-sendiri',
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
        case actionTypes.GET_PRODUCT_DETAIL_ID:
            const findProduct = state.productList.find(produk => String(produk.id) === String(action.payload))
           
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
            case actionTypes.ADD_PRODUCTDETAIL_TO_CART:
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
         case actionTypes.INCREMENT_PRODUCT: {
                let carts = state.cart
                const findIndex = state.cart.findIndex(produk => String(produk.id) === String(action.payload.id))
               

                if(findIndex >= 0) {
                    carts[findIndex].qty = carts[findIndex].qty + 1
                }
                return {
                    ...state,
                    cart: carts,
                    productDetail: state.productDetail.qty + 1                     
                }
         }
         case actionTypes.DECREMENT_PRODUCT: {
            // update qty nilai product detail, isinya 1
            // update qty nilai di cart sesuai dengan product, isinta bisa lebih dari 1

            let carts = state.cart

            // cart = [
            //     {
            //         x.id : 6,
            //         x.category : 'ADVENTURE',
            //         x.name : 'Item Type/ Name 3',  // index 0
            //     },
            //     {
            //         id : 7,
            //         category : 'ADVENTURE',
            //         name : 'Item Type/ Name 3', // index 1
            //     }
            // ]

            // const cart = [
            //     {
            //         id : 6,
            //         category : 'ADVENTURE',
            //         name : 'Item Type/ Name 6',  // index 0
            //     },
            //     {
            //         id : 7,
            //         category : 'ADVENTURE',
            //         name : 'Item Type/ Name 7', // index 1
            //     },
            //     {
            //         id : 8,
            //         category : 'ADVENTURE',
            //         name : 'Item Type/ Name 3', // index 1
            //     }
            // ]
            const findIndex = carts.findIndex(x => String(x.id) === String(action.payload.id))
            // console.log(findIndex)
            // console.log(cart[findIndex]) // cart[0]

            // jika product ada, findIndex != -1 / >= 0
            // jika qty cart == 1, maka hapus / filter product yang qty 1 hapus dari cart
            // jika qty cart > 1, makan tetep kurangin

            if(findIndex >= 0){
                if(state.productDetail.qty <= 1) {
                    console.log(state.cart)
                    const newCarts = state.cart.filter(x => String(x.id) !== String(action.payload.id))
                    console.log(newCarts)

                    return {
                        ...state,
                        cart: newCarts
                    }
                } else {
                    carts[findIndex].qty = carts[findIndex].qty - 1
                    return {
                            ...state,
                            cart: carts,
                            productDetail: state.productDetail.qty - 1                     
                        }
                }
            }

            // if(findIndex >= 0) {
            //     carts[findIndex].qty = carts[findIndex].qty - 1
            // }
            // return {
            //     ...state,
            //     cart: carts,
            //     productDetail: state.productDetail.qty - 1                     
            // }
     }
                
              
                
    }
   
    return state
}

export default reducer
