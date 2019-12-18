import React from 'react';
import Searchbar from './components/searchbar'
import Grid from './components/grid'
import Nav from './components/navbar'
import Offer from './components/offer'
import Slider from './components/slider'
import Footer from './components/footer'
import Menu from './components/navbar/menu'
import Promotion from './components/promotion'
import Search from './components/searchResult'
import Details from './components/details'
import './App.css';
import {Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <div className="container">
        <Nav/>
        <Route exact path='/' component={Slider}/>
        
        
        <div className="content">
          <Menu/>
          <Searchbar/>
          <Route exact path='/' component={Offer}/>
        </div>
      
        <Route exact path='/' component={Grid}/>
        <Route exact path='/' component={Promotion}/>
        <Route exact path='/details' component={Details}/>
        <Route exact path='/search' component={Search}/>
        <Footer/>
    
      </div>
     
    </div>
          
   
  );
}

export default App;
