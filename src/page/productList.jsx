import '../style-page/productListStyle.scss'
import { CartFill, Search } from 'react-bootstrap-icons'
import group from '../asset/Group.svg'
import { useHistory } from 'react-router-dom'
const ProdukList = () => {
    const history= useHistory()
    const featureList =  ["ADVENTURE", "ROMANCE", "MAGIC", "HORROR"]
    const listCard = [
        {
            id : '1',
            title : 'One Piece',
            category : 'ADVENTURE'

        },
        {
            id : '2',
            title : 'Naruto',
            category : 'ADVENTURE'   
        },
        {
            id : '3',
            title : 'Kimi No Nawa',
            category : 'ROMANCE'
        },
        {
            id : '4',
            title : 'Sword Art Online',
            category : 'MAGIC'

        },
        {
            id : '5',
            title : 'AOT',
            category : 'HORROR'   
        },
        {
            id : '6',
            title : 'Fairy Tale',
            category : 'MAGIC'
        },
        {
            id : '7',
            title : 'Dr. Stone',
            category : 'ADVENTURE'

        },
        {
            id : '8',
            title : 'Kanojo',
            category : 'ROMANCE'   
        },
        {
            id : '9',
            title : 'Class Room',
            category : 'HORROR'
        }
    ]
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
                        <CartFill className='cart-cart'></CartFill>
                    </div>
                    
                </div>
            </div>
            
            {/* shop content section */}
            <div className='shop-content'>
                <div className='feature-list'>
                    <ul>
                        {featureList.map((value,index) => {
                             return <li key={index}>
                                 <a>FEATURED</a>
                                 <li>{value}</li>
                                 </li>
                                 
                        })}
                      
                       
                    </ul>
                </div>
                <div className='product-list'>
                    {listCard.map((value,index) => {
                       return <div onClick={() => history.push ('/contentproduct')} className='card' key={index}>
                           <div  className='isiCard'>
                            <p>{value.title}</p>
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

export default ProdukList