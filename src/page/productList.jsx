import '../style-page/productListStyle.scss'
import { CartFill, Search } from 'react-bootstrap-icons'
import group from '../asset/Group.svg'
import { useHistory } from 'react-router-dom'
import data from './../../src/mock/data'
import { connect } from 'react-redux'


const ProdukList = (props) => {
   
    const {productList, categoryList} = props
    const history= useHistory()
    return (
        <>
        <div className='container'>
            
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
                   
                    {productList.map((value,index) => {
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

            {/* footer */}
            <div className='pagination'>
                <a href="#">&laquo;</a>
                <a className='active' href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
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
        cart: state.productReducer.cart 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // addToChart: () => dispatch({ type: 'GET_PRODUCT_DETAIL_ID', payload: i}),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProdukList);