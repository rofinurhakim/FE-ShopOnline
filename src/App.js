import React from 'react'
import  MainPage  from './page/mainpage'
import ProductList from './page/productList'
import contentProduct from './page/contentProduct'
import {BrowserRouter as Router, Switch, Route  } from 'react-router-dom'

function App() {
  return (
    
      <Router>
     <Switch>
       <Route component={ MainPage } path='/' exact />
       <Route component={ ProductList } path='/productlist' />
       <Route component={ contentProduct } path='/contentproduct' />
        
     </Switch>
   </Router>
   
  
   
   )

}

export default App;
