import React from "react";
import searchicon from './images/search.png';
import axios from "axios";
import "./SearchBar.css";
import BooksList from "./BooksList";



 class SearchBar extends React.Component{

state={ books:[], term:"", setTerm:""}
  
  
onTermSubmit = () => {
  axios.get("http://localhost:8080/books/" + this.state.term)
  .then(result =>{
  this.setState({
      books: result.data.docs
      
  })
})
}
        
onFormSubmit =(event) => {
  event.preventDefault();
  this.onTermSubmit(this.state.term)
}

onInputChange = (event) => {
this.setState({term: event.target.value})
}      
           
   render(){
   
    
    return (
    
        <div className="Search" class="ui  center aligned container" >
      <h1 class="ui huge center aligned  icon header">
        <img 
            class="ui centered medium image"
             src={searchicon}
             width="50%" height="10%"
              alt="icon" />
        <div class="content">
      Wyszukaj książki   <div class="sub header">Tutaj możesz przeglądać oraz wyszukiwać nowe książki.</div>
        </div>
      </h1>
        <div class="ui  icon input" >
        <form class="ui  search"  onSubmit={this.onFormSubmit}>
        <div class="ui icon input">
          <input
            class="prompt"
            type="text" 
            value={this.state.term}
            onChange={this.onInputChange}
            placeholder="Wpisz tytuł ..."/>   
          
          <i class="search icon"></i>
        </div>
        <div class="results"></div>
        <button class="ui teal button" type="submit" onClick={this.onFormSubmit}>Szukaj</button>
                  </form>
                  </div>
                  <div>
                  <BooksList 
     
     books ={this.state.books} title="Książki"/>
                
                  </div>
                  </div>

    ) }
    }

   
export default SearchBar;

  
    