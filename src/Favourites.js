import React from "react";
import bookcover from "./images/cover.jpg";
import favourite from "./images/favourite.png";
export default function Favourites() {
     
    return (
        <div  class="ui  center aligned container">
        <h1 class="ui center aligned  icon header">
  <img 
      class="ui centered medium image"
       src={favourite}
       width="50%" height="10%"
        alt="icon" />
  <div class="content">
Ulubione    <div class="sub header">Miejsce na twoje ulubione książki.</div>
  </div>
</h1>
 <div class="ui doubling stackable cards">
            
 <div class= "card"  >
   <div class="image" >
     
     <img class="ui center floated image" src={bookcover} />
   </div>
   <div class="content">
       <div class="header">
      < h2 class="ui header">Harry Potter</h2>
       <h4 class="ui blue header">Autor: J.K Rowling</h4>
       <h5 class="paragraph">
         Rok wydania:
       </h5>
     </div>
   </div>
   <div class="extra content">
     
 <button class="ui pink labeled icon button" >
   Usuń z ulubionych
   <i class="heart  icon"></i>
 </button>
   </div>
 </div>
</div>
</div>
    );
}