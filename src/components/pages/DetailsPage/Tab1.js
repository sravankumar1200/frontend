import React from 'react'
import axios from 'axios';

const Tab1 = () => {
    let tokenStr = ''
    const headers = { Authorization: `${tokenStr}` };
    axios.get("https://82a4-13-234-11-126.in.ngrok.io/customer/getall", {headers}).then((data) => {
        console.log("inside axio1s");
        console.log(data);
    });
    return (
        <div>
            <table className='table-det'>
                <tr>
                    <td colSpan='3' className='lol'>Customer Details</td>
                </tr>
                <tr>
                    <td className='lol'>Name </td>
                    <td className='lol'> ID </td>
                    <td className='lol'>Balance</td>
                </tr>
                <tr>
                    <td className='lol'>Enter name</td>
                    <td className='lol'>Enter id</td>
                    <td className='lol'>Enter balance</td>
                </tr>
            </table>
        </div>
    )
}

export default Tab1
