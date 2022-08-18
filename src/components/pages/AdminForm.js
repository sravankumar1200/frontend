import React, { useState } from 'react'
import './loginform.css'

function AdminForm({Login, error}) {

    const [detailsadmin, setdetailsadmin] = useState({aid: '', pwd:''});

    const submithandler = e => {
        e.preventDefault();
        Login(detailsadmin);
    }

    return (
        <div className='outer'>
        <div className='box'>
        <form onSubmit={submithandler} className='input' id='login'>
            <div className='inside-form'>
            <h2 className='text-effect-admin'>Admin Login</h2>
            {(error !== '' ? (
                <div>
                    {error}
                </div>
            ) : '')}
            <div className='form-ele'>
                <input type='text' name='aid' id='aid' className='if' placeholder='Enter id' onChange={e => setdetailsadmin({...detailsadmin, aid: e.target.value})} value={detailsadmin.aid} required/>
            </div>
            <div className='form-ele'>
                <input type='password' className='if' name='pwd' id='pwd' placeholder='Password' onChange={e => setdetailsadmin({...detailsadmin, pwd: e.target.value})} value={detailsadmin.pwd} required/>
            </div>
            <input type='submit' className='sb' value='Login' id='submitbtn'/> 
            </div>
        </form>
        </div>
        </div>
    )
}

export default AdminForm
