import '../style-page/contentStyle.scss'
import Picture from '../asset/Picture.svg'
import Rectangle3 from '../asset/Rectangle 3.svg'
import group from '../asset/Group.svg'
import { connect } from 'react-redux'
import { CartFill } from 'react-bootstrap-icons'


const contentProduct = (props) => {
    
	
  
   const productDetail =  {
       id : 1,
       name : 'Item Type/ Name',
       type: 'Color',
       image : Picture,
       price : 19.99,
       priceStrikethough : 39.99,
       descname: 'Kacamata tampan dan berani',
       desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen`,
       size: 'medium',
       source: ' 100% Cotton',
       gender:' Mens'
       
   }
   
   const onAddToCart = () => {
        console.log(productDetail)
    };
    


  
    return (
        <>
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
                    <h6>{props.counter}</h6>
                    <p>GO BACK</p>
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
                <div className='addchart-btn'>
                    <button onClick={() => {
                        props.addToChart();
                        onAddToCart()

                    }}>ADD TO CART</button>
                </div>
            </div>

        </div>
        <div className="footer">
            <img  classname='icon2' src={group} alt=""/>


        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
           
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addToChart: () => dispatch({ type: 'ADD_CHART' }),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(contentProduct);