import React from 'react'
import "./Login.css"
import Button from '@material-ui/core/Button';
import {auth, provider} from "./firebase"
import { actionTypes } from "./reducer";
import { useStateValue } from './StateProvider';

function Login() {

  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth.signInWithPopup(provider).then(result => {
      
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      });
    })
     .catch(error => alert(error.message));
  };


  return (
    <div className="login">

      <div className="login_logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/120px-Facebook_f_logo_%282019%29.svg.png" alt="LoginLogo"/>

        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="Facebook"/>

        <h2> <a href="https://virajnimbalkar.netlify.app/" target="_blank">"By Viraj Nimbalkar"</a> </h2>
      </div>

      <Button type="submit" onClick={signIn}>
          Sign In
        </Button>
            
    </div>
  )
}

export default Login
