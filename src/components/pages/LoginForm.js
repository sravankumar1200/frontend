import React, { useState } from 'react'
import './loginform.css'
import axios from 'axios';
function LoginForm({Login, error}) {

    const [details, setdetails] = useState({uid: '', pwd:''});

    const submithandler = e => {
        e.preventDefault();
        Login(details);
        axios.post('http://localhost:8080/user/login', {
        username : details.uid,
        pwd: details.pwd
      })
      .then(function (response) {
        console.log(response.data.token);
        localStorage.setItem('tkn', response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    // axios.get("https://6a5b-13-234-11-126.in.ngrok.io/user/login").then((data) => {
    //     console.log("inside axio1s");
    //     console.log(data);
    // });
    

    return (
        <div className='outer'>
        <div className='box'>
        <form onSubmit={submithandler} className='input' id='login'>
            <div className='inside-form'>
            <h2 className='text-effect'>Login</h2>
            {(error !== '' ? (
                <div>
                    {error}
                </div>
            ) : '')}
            <div className='form-ele'>
                <input type='text' name='uid' id='uid' className='if' placeholder='User id' onChange={e => setdetails({...details, uid: e.target.value})} value={details.uid} required/>
            </div>
            <div className='form-ele'>
                <input type='password' className='if' name='pwd' id='pwd' placeholder='Password' onChange={e => setdetails({...details, pwd: e.target.value})} value={details.pwd} required/>
            </div>
            <input type='submit' className='sb' value='Login' id='submitbtn'/> 
            </div>
        </form>
        </div>
        </div>
    )
}

export default LoginForm
