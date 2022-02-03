import React from "react";
import ReactDOM from "react-dom";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import Account from "./Account";
import Home from "./Home";
import Favourites from "./Favourites";
import Login from  "./Login";
import Registration from "./Registration";
import BooksList from "./BooksList";
import axios from "axios";

import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
 

class App extends React.Component{
  

  render(){ 
    return (
      <div class="ui segment">
     
<Router>
                    <Menu />  
          <Routes>
            <Route path="Favourites" element={<Favourites/>}/>
          <Route path="Home" element ={<Home />} />
          <Route path="SearchBar" element ={<SearchBar/>} />
          <Route path="Account" element ={<Account />} />
          <Route path="Login" element={<Login/>}/>
          <Route path="Registration" element={<Registration/>}/>
          </Routes>
           
      </Router>
      
      </div>
      
    )
    
  }  
}



ReactDOM.render(<App /> , document.querySelector('#root'));
