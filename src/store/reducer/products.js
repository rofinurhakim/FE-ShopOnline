
import Picture from '../../asset/Picture.svg'
import productList from '../../page/productList'
import * as actionTypes from '../reducer/actions'


const initialState = {
    counter: 0,
    cart: [],
    productDetail: [],
    list: [],
    page: 1,
    totaldata: 6,
    show: 4,
    totalpage: 3,
    productList: [
        {
            id : 1,
            name : 'Item Type/ Name 1',
            slug: 'tips-blow-rambut-sendiri',
            type: 'Color',
            image : Picture,
            category : 'ADVENTURE',
            price : 19.99,
            priceStrikethough : 39.99,
            descname: 'Kacamata tampan dan berani',
            desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen`,
            size: null,
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
            size: null,
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
            size: null,
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
            size: null,
            source: ' 100% Cotton',
            gender:' Mens',
            qty: 1
        },
      
        
        
        
       
        

        
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
                    console.log('Jalan nih')
                    const newCarts = state.cart.filter(x => String(x.id) !== String(action.payload.id))
                    console.log(newCarts)

                    return {
                        ...state,
                        cart: newCarts
                    }
                } else {
                    console.log('kalo nggak jalan')
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
     case actionTypes.CHANGE_SIZE: {
        let a = 'variabel'
        a = 'rubah variabel'

       return {
           ...state,
           productDetail: state.productDetail.size = action.payload
       }
    }
    case actionTypes.GET_LIST: {
        console.log(action.payload)
        let totaldata = state.productList.length // 6
        let totalpage = 0
        console.log(7/2) // 1

        // jika bagi sisa ada maka tambah 1 page
        // kalo nggak ada genapin

        if(totaldata % action.payload.show == 0) {
            
            totalpage = totaldata / action.payload.show
        } else {
            
            totalpage = Math.floor(totaldata / action.payload.show) + 1
        }

        // total data 6
        // show
        // looping 2
        // page 1, data 1 - 2
        // page 2, data 3 - 4
        // page 3, data 5 - 6
        let listfinal = []

        if(action.payload.page == 1) {
            // looping
                    // 1                   2
            for(let i = 1; i <= action.payload.show; i++) {
                //  2 <= 2 ? ya

                listfinal.push(state.productList[i-1])
            }
        } else if (action.payload.page <= totalpage) {
                            // 4 - 6
                            // 4 - 5
            for(let i = action.payload.show * (action.payload.page - 1); i < action.payload.show * action.payload.page; i++) {
                // showing x (page - 1) )  + 1
                // 2
                // 3
                // 4 == 4
                if(state.productList[i]) {
                    listfinal.push(state.productList[i])
                }
               
            }
        } else {
            listfinal = []
        }
        
        
        
        
    
        console.log('total page adalah = ' + totalpage)

        return {
            ...state,
            totaldata: totaldata,
            totalpage: totalpage,
            list: listfinal
        }
 }
 case actionTypes.CHANGE_PAGE: {
    console.log(action.payload)
    let totaldata = state.productList.length // 6
    let totalpage = 0
    console.log(7/2) // 1

    // jika bagi sisa ada maka tambah 1 page
    // kalo nggak ada genapin

    if(totaldata % action.payload.show == 0) {
        
        totalpage = totaldata / action.payload.show
    } else {
        
        totalpage = Math.floor(totaldata / action.payload.show) + 1
    }

    // total data 6
    // show
    // looping 2
    // page 1, data 1 - 2
    // page 2, data 3 - 4
    // page 3, data 5 - 6
    let listfinal = []

    if(action.payload.page == 1) {
        // looping
                // 1                   2
        for(let i = 1; i <= action.payload.show; i++) {
            //  2 <= 2 ? ya

            listfinal.push(state.productList[i-1])
        }
    } else if (action.payload.page <= totalpage) {
                        // 4 - 6
                        // 4 - 5
        for(let i = action.payload.show * (action.payload.page - 1); i < action.payload.show * action.payload.page; i++) {
            // showing x (page - 1) )  + 1
            // 2
            // 3
            // 4 == 4
            if(state.productList[i]) {
                listfinal.push(state.productList[i])
            }
           
        }
    } else {
        listfinal = []
    }

    console.log('total page adalah = ' + totalpage)

    return {
        ...state,
        totaldata: totaldata,
        totalpage: totalpage,
        page: action.payload.page,
        list: listfinal
    }
}
                
              
                
    }
   
    return state
}

export default reducer
