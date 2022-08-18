import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
const Tab3 = () => {
   axios.defaults.withCredentials = true
   let [log1, setlog1] = useState([]);
   let token1 = localStorage.getItem('tkn');
   let axiosConfig = {
    headers: {
        'Authorization': `${token1}`
    }
    };
    // useEffect(()=>{
    //     console.log("useEffect called");
    function o(){
    axios.get(`http://localhost:8080/transaction/getall`,axiosConfig)
             .then(function (response) {
                setlog1(response.data)
                console.log(log1)
                 console.log(response.data)
                 
             })
             .catch(function (error) {
                 console.log("error is here"+error);
             });
            }
    //         },
    //  [] )
    return (
        <div className='col'>
            <table className='table-det'>
                <thead>
                <tr>
                    <td colSpan='9' className='lol' scope='col'>Transfer Details</td>
                </tr>
                <tr>
                    <td className='lol' scope='col'>Transaction ID</td>
                    <td className='lol' scope='col'>Amount</td>
                    <td className='lol' scope='col'>Receiver Name</td>
                    <td className='lol' scope='col'>Receiver ID</td>
                    <td className='lol' scope='col'>Date</td>
                    <td className='lol' scope='col'>BIC</td>
                    <td className='lol' scope='col'>Sender ID</td>
                    <td className='lol' scope='col'>Message Code</td>
                    <td className='lol' scope='col'>Transfer type</td>
                </tr>
                </thead>
                {
                    log1.map((value) =>{
                        return (
                <tbody>
                <tr>
                    <td className='lol' scope='row'> {value.transactionid} </td>
                    <td className='lol' scope='row'> {value.amount} </td>
                    <td className='lol' scope='row'> {value.reciver_ac_name} </td>
                    <td className='lol' scope='row'> {value.reciver_ac_no} </td>
                    <td className='lol' scope='row'>{value.transferdate}</td>
                    <td className='lol' scope='row'> {value.bank.bic} </td>
                    <td className='lol' scope='row'> {value.customer.custid}</td>
                    <td className='lol' scope='row'> {value.message.messagecode} </td>
                    <td className='lol' scope='row'> {value.transfertype.transfertypecode} </td>
                </tr>
                </tbody>
                    )}
                    )}
            </table>
            <button onClick={o}>clickme</button>
        </div>
    )
}

export default Tab3
