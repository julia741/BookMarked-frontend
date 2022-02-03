import React from "react";
import { useState} from "react";
import account from "./images/user-laptop.png";
import axios from "axios";
import DisplayData from "./DisplayData"
export default function Login() {
    const [getIdUsers] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const [data, setData] = useState('');
    const handleSubmit = (e) => {
      
  
      e.preventDefault();
     const event = { username,
       password};
       onClickAction(event)
    }
   
    function onClickAction() {
      const Users = JSON.stringify({ username: username ,password: password  });
      
      
      console.log(Users);
      var test = axios.post('http://localhost:8080/login',Users,{ headers: {
        'Content-Type': 'application/json'}},).then(Response =>
       {
        console.log(
        Response.data)
        setData(Response.data);
      })
      .catch(error => {console.log(error.Response)})
      
     
        }
       
       
        
          
        
      
    return (
        <div>
            <h1 class="ui center aligned  icon header">
  <img 
      class="ui centered medium image"
       src={account}
       width="50%" height="10%"
        alt="icon" />
  <div class="content">
Logowanie  <div class="sub header">Musisz być zalogowany aby w pełni korzystać ze strony.</div>
  </div>
  </h1>
  <form class="ui form" onSubmit={handleSubmit}>
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
    <input 
    type="password"
     name="Password"
      placeholder="Hasło" 
      onChange={(e) => setPassword(e.target.value)}
value={password}
      />

  </div>
  <button class="ui teal button" type="submit" onClick={ (e) =>onClickAction()} > Zaloguj się</button>
</form>
<DisplayData data={data} />
</div>
    );
 
}