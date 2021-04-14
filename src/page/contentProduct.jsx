import '../style-page/contentStyle.scss'
import Picture from '../asset/Picture.svg'
import Rectangle3 from '../asset/Rectangle 3.svg'
import group from '../asset/Group.svg'
import { connect } from 'react-redux'
import { Cart, CartFill } from 'react-bootstrap-icons'
import useRouter from 'use-react-router'
import {useEffect} from 'react'
import { render } from '@testing-library/react'
import productList from './productList'
import * as actionType from '../store/reducer/actions'
import { NavItem } from 'react-bootstrap'


const ContentProduct = (props) => {
   

    const {
        productDetail, 
        getProductById, 
        productList, 
        addProductToCart, 
        cart, 
        counterIncrement, 
        counterDecrement, 
        changeSizeProductDetail} = props
    
    // define methods yang ada di useRouter
    const {match, history} = useRouter()

    
    const counterplus = () => {
        counterIncrement(productDetail)
        getProductById(match.params.id)
        ButtonUI()
    }

    const countermin = () => {
        counterDecrement(productDetail)
        getProductById(match.params.id)
        ButtonUI() 
    }

    const selectSize = (event) => {
        changeSizeProductDetail(event.target.value)
    }

    const validasiCheck = () => {
        if(productDetail.size == null || productDetail.size == '') {
            alert('Mohon Pilih Size')
        } else {
            addProductToCart(productDetail)
        }
    }
    
    useEffect(() => {
       // jalanin function get product by id
       getProductById(match.params.id)
    }, [getProductById, match.params.id, cart, counterplus])


    

    const ButtonUI = () => {
        const Product = cart.find(produk => String(produk.id) === String(match.params.id))
        if(Product) {
            return (
                <div className='addchart-btn'>
                <div>
                    <span>
                        <button onClick={() => countermin()}>-</button>
                    </span>
                    <span>
                        <p>{productDetail.qty}</p>
                    </span>
                    <span>
                        <button onClick={() => counterplus()}>+</button>
                    </span>
                </div>
            </div>
            )
        } else {
            return (
                <div className='addchart-btn'>
                <button onClick={() => {
                  validasiCheck()
                    
                }}>ADD TO CART</button>
            </div>
            )
        }
    }


    const renderUI = () => {
        const ui = productDetail

        
        if(ui != null) {
            return (
                <>
                {/* {JSON.stringify(productDetail)}
                <br/>
                <br/>
                
                <br/>
                <br/>
                {JSON.stringify(cart)} */}
                {JSON.stringify(productDetail)}
                <br/>
                <br/>
                {JSON.stringify(cart)}

                    <img className='bg' src={Rectangle3} alt=""/>
                <div className='container2'>
                    {/* content-left */}
                    <div className='content-left'>
                        <div className='picture'>
                            <img src={Picture} alt=""/>
                        </div>
                    <div className='swipe'>
                        <button>&#10094;</button>
                        <button>&#10095;</button>
                    </div>
                    </div>
                    {/* content-right */}
                    <div className='content-dec'>
                        <div className='chart-right'>
                            <CartFill className='cart-data'></CartFill>
                            <h6>{cart.length}</h6>
                           
                            <p onClick={() => history.push (`/productlist`)}>GO BACK</p>
                        </div>
                        <div className='item'>
                            <h1>{productDetail.type}</h1>
                            <h2>{productDetail.name}</h2>
                        </div>
                        <div className='price'>
                            <h2>${productDetail.price}</h2>
                            <h5><s>%{productDetail.priceStrikethough}</s></h5>
                        </div>
                        <div className='deskripsi'>
                            <p>{productDetail.descname}</p>
                            <p>{productDetail.desc} </p>
                        </div>
                        <div className='list-size'>
                            <p>Size:</p>
                            <select value={productDetail.size} onChange={selectSize} name="size-list" id="size">
                            <option value="">Pilih Size</option>
                                <option value="M">Medium</option>
                                <option value="L">Large</option>
                            </select>
                        </div>
                        <div className='dec-right'>
                            <p>{productDetail.gender}</p>
                            <p>{productDetail.source}</p>
                        </div>
                        {ButtonUI()}
                    </div>
        
                </div>
                <div className="footer">
                    <img  classname='icon2' src={group} alt=""/>
        
        
                </div>
                </>
            )
        } else {
           return (
            <>
            <p>404 not found</p>
            </>
           )
        }
    }

    return (
        renderUI()
    )

   
  
//    const productDetail =  {
//        id : 1,
//        name : 'Item Type/ Name',
//        type: 'Color',
//        image : Picture,
//        price : 19.99,
//        priceStrikethough : 39.99,
//        descname: 'Kacamata tampan dan berani',
//        desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen`,
//        size: 'medium',
//        source: ' 100% Cotton',
//        gender:' Mens'
//    }
   
//    const onAddToCart = () => {
//         console.log(productDetail)
//     };
    

  
  
    
}

const mapStateToProps = (state) => {
    return {
        counter: state.productReducer.counter,
        productDetail: state.productReducer.productDetail,
        productList: state.productReducer.productList,
        cart: state.productReducer.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getProductById: (id) => dispatch({ type: actionType.GET_PRODUCT_DETAIL_ID, payload: id}),
        addProductToCart: (product) => dispatch({type: actionType.ADD_PRODUCTDETAIL_TO_CART, payload: product}),
        counterIncrement: (product) => dispatch({type: actionType.INCREMENT_PRODUCT, payload: product}),
        counterDecrement: (product) => dispatch({type: actionType.DECREMENT_PRODUCT, payload: product}),
        changeSizeProductDetail: (size) => dispatch({type: actionType.CHANGE_SIZE, payload: size})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentProduct);