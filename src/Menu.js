import Account from "./Account.js";
import React from "react";
import {NavLink} from 'react-router-dom';
import bookList from "./index.js";
const Menu  = () => {

    return (
      
      
      <div class="ui  secondary pointing menu" >
        
        
      <a class="active teal item" href="/Home" >
      <i class ="home icon"></i>
      
      Strona Główna

      </a>
      <a class="teal item" href="/Account" activeclass="active teal item" >
      <i class ="user icon"></i>
      Twoje konto
      </a>
      <a class="teal item" href="/Favourites">
      <i class ="heart icon"></i>
    Ulubione  </a>
      <a class="teal item" href="/SearchBar" >
      <i class ="search icon"></i>
        Wyszukaj książki
      </a>
      
      <div class="right menu">
      <a class="ui teal button" href="/Login">
Logowanie   </a>
<a class="ui pink button" href="/Registration">
Rejestracja   </a>
        <a class="ui item">
          <i class ="sign in icon"></i>
          Wyloguj Się
        </a>
        </div>
        </div>
        
      
    )};

    
    export default Menu;