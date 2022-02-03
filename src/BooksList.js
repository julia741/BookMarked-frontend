import React from "react";
import cover from "./images/okladka2.png"
const BooksList = ({books}) => {
     
    books = Array.from(books);
    
       
return(
   
    <div class="ui centered four doubling stackable cards" >

         { books.map(book =>(
<div class ="card" key={book.id_books}>
  <div class="image" >
    <img class="ui center floated image" src={cover}/>
  </div>
  <div class="content" >
      <div class="header">
     < h2 class="ui header">{book.title}</h2>
      <h4 class="ui blue header">Autor: {book.author_name}</h4>
      <h5 class="paragraph">
        Rok pierwszego wydania: {book.first_publish_year}
        
      </h5>
      
     
    </div>
  </div>
  <div class="extra content">
    
<button class="ui pink labeled icon button" >
  Dodaj do ulubionych
  <i class="heart outline icon"></i>
</button>
  </div>
</div>

        ))}
</div>
)
}
export default BooksList;