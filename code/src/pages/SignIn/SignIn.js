import React from 'react';
import {useNavigate} from 'react-router-dom';

function SignIn() {
  let navigate = useNavigate();
  return (
    <div className='join'>
    <h1>Sign In</h1>
    <button onClick={()=>{ navigate('/message')}}>Sign In to messages</button>
    </div>
  )
}

export default SignIn;