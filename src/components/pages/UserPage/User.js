import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import LoginForm from '../LoginForm'
import TransferForm from '../TransferPage/TransferForm';

const User = () => {

    const userdat = {
        uid: 'sravan',
        pwd: '3412'
    }

    const [user, setuser] = useState({uid: '', pwd: ''});
    const [error, seterror] = useState('');

    const login = details =>{
        console.log(details);

        if (details.uid === userdat.uid && details.pwd === userdat.pwd)
        {
            console.log("logged in");
            setuser({
                uid: details.uid,
                pwd: details.pwd
            });
        }
        else{
            console.log("bruh");
            seterror("bruh");
        }
    }

    const logout =() =>{
        console.log('logout');
        setuser({uid: '', pwd: ''});
        seterror('');
    }

    return (
        <div>
            {(user.uid !== '') ? (
                <div className='usrdiv'>
                    <h2 style={{color: 'whitesmoke'}}>Welcome, <span>{user.uid}</span></h2>
                    <button className='usr-btn' style={{marginLeft: '75%'}} onClick={logout}>Logout</button>
                    <Link to={`/User/Detailsp`}>
                        <button className='usr-btn' style={{marginLeft: '20px'}} onClick>View Info</button>
                    </Link>
                    <TransferForm />
                    <Outlet />
                </div>
                
            ) : (
                <LoginForm Login={login} error={error}/>
                )}
            </div>
    )
}

export default User
