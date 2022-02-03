import React from "react";
import { useState, useEffect } from "react";
import registration from "./images/registration.png"
import axios from "axios";
import DisplayData from "./DisplayData"
export default function Registration() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState('');
  const [ id_users, setUserId] = useState(null);
  function onClickAction() {

        const users = JSON.stringify({ username: username, password: password, email:email});
        axios.post('http://localhost:8080/register', users,{ headers: {
          'Content-Type': 'application/json'}},).then(Response =>
            {
              console.log
             (Response.data)
             setData(Response.data);
            
             } )
           .catch(error => {console.log(error.Response)})
             }
             
    const Users = JSON.stringify({ username: username ,password: password  });
   
    
  const handleSubmit = (e) => {
    

    
    e.preventDefault();
   const event = {email, username, password};
  console.log(event); 
  }
  
    return (
        <div>
            <h1 class="ui center aligned  icon header">
  <img 
      class="ui centered medium image"
       src={registration}
       width="50%" height="10%"
        alt="icon" />
  <div class="content">
Rejestracja  <div class="sub header">Stwórz konto, aby w pełni korzystać ze strony.</div>
  </div>
  </h1>


  <form class="ui form" onSubmit={handleSubmit}>
  <div class="required field">
    <label>E-mail</label>
    <input
     type="email" 
     placeholder="joe@schmoe.com" 
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     />
  </div>
  <div class="required field">
    <label>Nazwa użytkownika</label>
    <input
     type="text"
      name="Username"
       placeholder="Nazwa użytkownika"
       value={username}
       onChange={(e) => setUsername(e.target.value)}
        />
  </div>
  <div class="required field">
    <label>Hasło</label>
    <input type="password" 
    name="Password" 
    placeholder="Hasło" 
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
  </div>
  
  
  <button class="ui teal button" type="submit" onClick={ (e) =>onClickAction() }  >Zarejestruj się</button>
</form>
<DisplayData data={data} />
      </div>
    );
}