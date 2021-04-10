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


const ContentProduct = (props) => {
   

    const {productDetail, getProductById, productList, addProductToCart, cart, counterIncrement} = props
    const {match, history} = useRouter()
    const counterplus = () => {
        counterIncrement(productDetail)
        getProductById(match.params.id)
        ButtonUI()
    }
    
    useEffect(() => {
       console.log('jalan')
       getProductById(match.params.id)
    }, [getProductById, match.params.id, cart, productDetail.qty, counterplus])


    

    const ButtonUI = () => {
        const Product = cart.find(produk => String(produk.id) === String(match.params.id))
        if(Product) {
            return (
                <div className='addchart-btn'>
                <div>
                    <span>
                        <button>-</button>
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
                   addProductToCart(productDetail)
                    
                }}>ADD TO CART</button>
            </div>
            )
        }
    }


    const renderUI = () => {
        console.log(productDetail)
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
                            <select name="size-list" id="size">
                                <option value="MEDIUM">Medium</option>
                                <option value="LARGE">Large</option>
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
        counter: state.counter,
        productDetail: state.productDetail,
        productList: state.productList,
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getProductById: (id) => dispatch({ type: 'GET_PRODUCT_DETAIL_ID', payload: id}),
        addProductToCart: (product) => dispatch({type: 'ADD_PRODUCTDETAIL_TO_CART', payload: product}),
        counterIncrement: (product) => dispatch({type: 'INCREMENT_PRODUCT', payload: product})
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentProduct);