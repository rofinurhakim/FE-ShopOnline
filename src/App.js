import React from 'react'
import  MainPage  from './page/mainpage'
import ProductList from './page/productList'
import contentProduct from './page/contentProduct'
import {BrowserRouter as Router, Switch, Route  } from 'react-router-dom'
import { PrivateRoute } from './route/privateRoute'
import Login from './page/login'
import Register from './page/register'
function App() {
  return (
    
      <Router>
     <Switch>
       <Route component={Login} path='/login' />
       <Route component={Register} path="/register" />
       <PrivateRoute component={ MainPage } path='/' exact />
       <PrivateRoute component={ ProductList } path='/productlist' />
       <PrivateRoute component={ contentProduct } path='/product/:id' />
        
     </Switch>
   </Router>
   
  
   
   )

}

export default App;
