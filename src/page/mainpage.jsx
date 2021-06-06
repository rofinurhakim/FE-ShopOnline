import '../style-page/mainStyle.scss'
import Mainbg from '../asset/Mainbg.svg'
import { useHistory } from 'react-router-dom'
import Group from '../asset/Group.svg'

const MainPage = () => {
    const history = useHistory()
    const elements = [
        {
            id :1,
            title : 'Gallery',
            sub : 'SUBTITLE'
        },
        {
            id :2,
            title : 'Activities',
            sub : 'SUBTITLE'
        },
        {
            id :3,
            title : 'Keynotes',
            sub : 'SUBTITLE'
        }
    ];

    return (
        <>
      
        <img className='bgd' src={Mainbg} alt=""/>
        <div className='container1'>
            <div className='title'>
                <div className='header1'>
                    <h1>Welcome To <b>Anime World</b></h1>
                    <h1>Buy Now <b>The Item</b></h1>
                </div>
                <div className='sub-header'>
                    <p>LATEST</p>
                    <p>ALL</p>
                </div>
            </div>
            {/* CONTENT SECTION */}
            <div className='mainpage-content'>
                <div className='shopnow-btn'>
                    <button onClick={() => history.push ('/productlist')}>Shop Now</button>
                </div>
                <div className='content-right'>
                    <div className='desc'>
                        <h3><span><b>New Concept</b></span> Of Online Shoping</h3>
                    </div>
                    <div className='paragraf'>
                        <p>Lorem ipsum will go here. Lorem <br/>
                        will go here. Lorem ipsum will <br/>
                         go here.Lorem ipsum will go 
                        here</p>
                    <div className='feature'>
                        {elements.map((value, index) => {
                            return <div className='card' key={index}>
                                        <div className='menu'>
                                        <h6>{value.title}</h6>
                                        <p>{value.sub}</p>
                                        </div>
                                        
                                    </div>
                        })}
                        
                    </div>
                    </div>    
                </div>
                
            </div>
            <div class='footer'>
            <img class="icon" src={Group} alt=""></img>
            </div>
        </div>
        </>
    )
}

export default  MainPage 