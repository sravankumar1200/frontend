import React, {useState} from 'react'
import AdminForm from '../AdminForm';

const Admin = () => {
    const admindat = {
        aid: 'admin',
        pwd: 'admin'
    }

    const [admin, setadmin] = useState({aid: '', pwd: ''});
    const [error, seterror] = useState('');

    const login = detailsadmin =>{
        console.log(detailsadmin);

        if (detailsadmin.aid === admindat.aid && detailsadmin.pwd === admindat.pwd)
        {
            console.log("logged in");
            setadmin({
                aid: detailsadmin.aid,
                pwd: detailsadmin.pwd
            });
        }
        else{
            console.log("bruh");
            seterror("bruh");
        }
    }

    const logout =() =>{
        console.log('logout');
        setadmin({aid: '', pwd: ''});
        seterror('');
    }

    return (
            <div>
            {(admin.aid !== '') ? (
                <div>
                    <h2>Welcome, <span>{admin.aid}</span></h2>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <AdminForm Login={login} error={error}/>
                )}
            </div>
    )
}

export default Admin
