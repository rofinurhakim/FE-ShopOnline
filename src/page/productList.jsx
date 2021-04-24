import '../style-page/productListStyle.scss'
import { CartFill, Search } from 'react-bootstrap-icons'
import group from '../asset/Group.svg'
import { useHistory } from 'react-router-dom'
import data from './../../src/mock/data'
import { connect } from 'react-redux'
import {useEffect, useState} from 'react'
import * as actionType from '../store/reducer/actions'
const axios = require('axios');

// const instance = axios.create({
//     baseURL: 'http://localhost:3000',
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
//   });


const ProdukList = (props) => {
   
    const {productList, categoryList, totalpage, show, totaldata, page,list, getProducts, changePageRedux} = props
    const history= useHistory()
    let [productEx, setProductEx] = useState([])


    useEffect(() => {
        axios.defaults.baseURL = 'http://localhost:3000';
        // Make a request for a user with a given ID
        axios.get('/products')
        .then(function (response) {
                    // handle success
                    console.log(response.data.data);
                        setProductEx(prevState => response.data.data)
                    })
        .catch(function (error) {
                // handle error
                console.log(error);
                alert('Data tidak Ditemukan')
        })


        // show berapa
        // page berapa
        const data = {
            show: show,
            page: page
        }
        console.log(`${show} & ${page}`)
         getProducts(data)
     }, [])

     const changePage = (event) => {
         console.log(event.target.innerHTML)
         console.log(typeof event.target.innerHTML)
         const data = {
            show: show,
            page: parseInt(event.target.innerHTML)
        }
         changePageRedux(data)
     }

    const renderPage = () => {
        let templatePage = []
        for(let i = 1; i <= totalpage; i++) {
            if(page == i) {
                templatePage.push(<a onClick={changePage} className='active' href="#">{i}</a>)
            } else {
                templatePage.push(<a onClick={changePage} href="#">{i}</a>)
            }
           
        }
        return templatePage
    }
    return (
        <>
        <div className='container'>
            {JSON.stringify(productEx)}
            
            {/* Navbar-Section */}
            <div className='shop-nav'>
                <h1>CASUAL STREET</h1>
                <div className='seacrh'>
                    <div className='input-group'>
                        <input type="text"/>
                        <Search></Search>
                        
                    </div>
                    <div className='cartIcon'>
                    <div className='chart-right'>
                            <CartFill className='cart-data'></CartFill>
                            <h6>{props.cart.length}</h6>
                           
                          
                        </div>
                    </div>
                    
                </div>
            </div>
            
            {/* shop content section */}
            <div className='shop-content'>
                <div className='feature-list'>
                    <ul>
                    <a>FEATURED</a>
                        {categoryList.map((value,index) => {
                             return <li key={index}>
                                 <li>{value.name}</li>
                                 </li>
                                 
                        })}
                      
                       
                    </ul>
                </div>

                <div className='product-list'>
                   
                   {productEx.map((value,index) => {
                      return <div onClick={() => history.push (`/product/${value.nama}`)} className='card' key={index}>
                          <div  className='isiCard'>
                           <p>{value.nama}</p>
                           <p>{value.category}</p>
                          </div>
                          

                       </div>
                   } )}
                   

               </div>

                <div className='product-list'>
                   
                    {list.map((value,index) => {
                       return <div onClick={() => history.push (`/product/${value.id}`)} className='card' key={index}>
                           <div  className='isiCard'>
                            <p>{value.name}</p>
                            <p>{value.category}</p>
                           </div>
                           

                        </div>
                    } )}
                    

                </div>
                <div className='filter-list'>
                    <ul>
                        <li>ALL</li>
                        <li><a><b>FILTER 1</b></a></li>
                        <li>FILTER 2</li>
                        <li>FILTER 3</li>
                        <li>FILTER 4</li>
                        <li>FILTER 5</li>
                    </ul>
                </div>
            </div>
                    
            <p>Show: {show}</p>
            <p>Total Data: {productList.length}</p>
            {/* footer */}
            <div className='pagination'>
                <a href="#">&laquo;</a>
                {/* {totalpage.map((data, i) => {
                    return <a href="#">{i + 1}</a>
                })} */}
                {renderPage()}
                {/* <a className='active' href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a> */}
                <a href="#">&raquo;</a>
            </div>
        </div>
        <div className='footer'>
            <img className='icon' src={group} alt=""/>
            
        </div>
        </>
    )
}



const mapStateToProps = (state) => {
    return {
        productList : state.productReducer.productList, 
        categoryList: state.categoryReducer.category,
        cart: state.productReducer.cart,
        totalpage: state.productReducer.totalpage,
        show: state.productReducer.show,
        totaldata: state.productReducer.totaldata,
        page: state.productReducer.page,
        list: state.productReducer.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // addToChart: () => dispatch({ type: 'GET_PRODUCT_DETAIL_ID', payload: i}),
        getProducts: (data) => dispatch({type: actionType.GET_LIST, payload: data }),
        changePageRedux: (data) => dispatch({type: actionType.CHANGE_PAGE, payload: data})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProdukList);