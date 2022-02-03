import React from "react";
import account from "./images/account.png"
import avataricon from "./images/pobierz.png";
export default function Account() {
     
    return (
        

        <div>
            <h1 class="ui center aligned  icon header">
  <img 
      class="ui centered medium image"
       src={account}
       width="50%" height="10%"
        alt="icon" />
  <div class="content">
Twoje konto    <div class="sub header"></div>
  </div>
  </h1>
        <a class="ui blue huge  image label"
        
        >
        <img src={avataricon} />
        Your Username...
        
</a>
      
      </div>
    );
}
 
        
 

    