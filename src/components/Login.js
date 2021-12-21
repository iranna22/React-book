import React from 'react' ;
import "../index.css" ;
import {useHistory} from "react-router-dom";

function Login () {
  const history = useHistory();

        return (
          <div className='heading'><h1> Book Mgnt</h1> 
  <div class="form-container">
      <form class="register-form">
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        <input
          id="password"
          class="form-field"
          type="text"
          placeholder="Password"
          name="password"
        />
        <button class="form-field" type="submit" 
         onClick={() => history.push(`/BooksList`)}
        >
          Login in
        </button>
      </form>
    </div>
    </div>      
    );
};


export default Login ;



