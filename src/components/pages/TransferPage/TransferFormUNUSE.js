import React, { useState } from 'react';
import './transferform.css';
import axios from 'axios';

function TransferForm ({Transfer, error}){
    axios.defaults.withCredentials = true
    const [Curr, setCur] = useState();
    const [details, setdetails] = useState({fname: '', facc:'', famt : '', ttype: '',ctype:'',tname: '',tacc:'',bic:'',tbname:''});
    const submithandler = e => {
        e.preventDefault();
        
        let token1 = localStorage.getItem('tkn');
        console.log("logging token here"+token1);
        console.log(typeof(token1))
        let axiosConfig = {
            headers: {
                'Authorization': `${token1}`
            }
          };
        let pd = {
            "custid": details.facc,
            "amount": details.famt,
            "bic": details.bic
        }
        console.log(details.fname);
        axios.post('http://localhost:8080/transaction/make',pd,axiosConfig)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log("error is here"+error);
      });
    }
    const curr = (testcurr) => {
        
        let idd = testcurr;

        if(idd === '1')
        {
            console.log('lol');
        }
        if(idd === '2')
        {
            console.log('lol');
        }
        if(idd === '3')
        {
            console.log('lol');
        }
        if(idd === '4')
        {
            console.log('lol');
        }

    }

    // const onFnameChange =(e) => {
    //    console.log(details.fname)
    // }

    return (
        <div>
                    <form className='inputfrom' id='loginfrom'>
                        <div className='inside-form-from'>
                            <h2 className='text-effect-from'>From</h2>
                            <div className='form-ele-from'>
                                <input type='text' name='fname' className='fname' placeholder='Enter Name' required/>
                            </div>
                            <div className='form-ele-from'>
                                <input type='text' name='facc' id='facc' className='facc' placeholder='Enter Acc Number' required/>
                            </div>
                            <div className='form-ele-from'>
                                <input type='number' name='famt' id='famt' className='famt' placeholder='Enter Amount' required/>
                            </div>
                            <div className='form-ele-from-dd'>
                                <label for='ttype'>Transfer Type : </label>
                                <select id='ttype' name='ttpye' className='ttype'>
                                    <option value='ctransfer'>Customer Transfer</option>
                                    <option value='btransfer'>Bank Transfer</option>
                                </select>
                            </div>
                            <div className='form-ele-from-dd'>
                                <label for='ctype'>Currency Type : </label>
                                <select id='ctype' name='ctpye' className='ctype' onChange={(event) => curr(event.target.value)} value = {Curr}>
                                    <option value='1' onSelect={curr()}>$ Dollar</option>
                                    <option value='2' onSelect={curr()}>$ SGD</option>
                                    <option value='3' onSelect={curr()}> € Eur</option>
                                    <option value='4' onSelect={curr()}> ¥ Yen</option>
                                </select>
                            </div>
                        </div>
                            <h2 className='text-effect-to'>To</h2>
                            <div className='form-ele-to'>
                                <input type='text' name='tname' id='tname' className='tname' placeholder='Enter Name' required/>
                            </div>
                            <div className='form-ele-to'>
                                <input type='text' name='tacc' id='tacc' className='tacc' placeholder='Enter Acc Number' required/>
                            </div>
                            <div className='form-ele-to'>
                                <input type='text' name='bic' id='bic' className='bic' placeholder='Enter BIC' required/>
                            </div>
                            <div className='form-ele-to'>
                                <input type='text' name='tbname' id='tbname' className='tbname' placeholder='Enter Bank Name' required/>
                            </div>
           
                    </form>

            <div>
                <input type='button' className='tsubmit' value='Transfer Now' id='tsubmit' onClick={submithandler}></input>
            </div>
            </div>
    ) 
}

export default TransferForm
