import React, { useState } from 'react'
import './transferform.css'
import axios from 'axios';
const TransferForm = () => {
    axios.defaults.withCredentials = true
   const [formdet, setformdet] = useState({fname: '', facc: '', famt: '', charges:'', ttype: '', mtype: '', curtype: '', tname: '', tacc: '', bic: '', tbname: ''});
   let token1 = localStorage.getItem('tkn');
   let axiosConfig = {
    headers: {
        'Authorization': `${token1}`
    }
    };
   const submithandler = e => {
        e.preventDefault();        
        
        console.log("logging token here"+token1);
        console.log(typeof(token1))
        let amt = formdet.famt;
        if(formdet.curtype==="1"){
            amt = parseFloat(formdet.famt)*74.21;
        }
        else if(formdet.curtype==="2"){
            amt = parseFloat(formdet.famt)*84;
        }
        else if(formdet.curtype==="3"){
            amt = parseFloat(formdet.famt)*102;
        }
        else if(formdet.curtype==="4"){
            amt = parseFloat(formdet.famt)*0.645;
        }
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        // var pad = function(num) { return ('00'+num).slice(-2) };
        //     var date;
        //     date = new Date();
        //     date = date.getUTCFullYear()         + '-' +
        //             pad(date.getUTCMonth() + 1)  + '-' +
        //             pad(date.getUTCDate())
        const date = new Date().toJSON().slice(0, 10)
        console.log(date)
        const datetime = new Date().toJSON().slice(0, 10).replace('/T.*/', ' ')
        console.log(datetime)
        var created_at = new Date().toISOString().slice(0, 10).replace('T', ' ');
        console.log(datetime);
        let amt1=amt+parseFloat(formdet.charges);
        let pd = {
            "custid": formdet.facc,
            "amount": amt1.toString(),
            "bic": formdet.bic,
            "messagecode": formdet.mtype,
            "transfertypecode": formdet.ttype,
            "reciver_ac_name": formdet.tname,
            "reciver_ac_no":formdet.tacc
        }
        console.log(formdet);
        axios.post('http://localhost:8080/transaction/make',pd,axiosConfig)
        .then(function (response) {
            alert("Transfer Successful\n"+"amount:"+response.data.amount+"\ntransaction id:"+response.data.transactionid+"\nClear balance:"+response.data.customer.clearbalance);
        })
        .catch(function (error) {
            let err = JSON.stringify(error)
            
            if(err.includes("500")){
               
                alert("Please re-check your inputs")
            }
            
           
        }); 
   setformdet({fname: '', facc: '', famt: '', charges:'', ttype: '', mtype: '', curtype: '', tname: '', tacc: '', bic: '', tbname: ''});

   }
  
   function getrohith() {
   let temp = formdet.facc;
   axios.get(`http://localhost:8080/customer/getbyId?id=${temp}`,axiosConfig)
             .then(function (response) {
                 console.log(response);
                 setformdet((previous) => ({...previous,fname: response.data.accountholdername}))
                 console.log(formdet);
        
             })
             .catch(function (error) {
                 console.log("error is here"+error);
             });
            }
    function getsravan() {
        let temp1 = formdet.bic;
        axios.get(`http://localhost:8080/bank/getbyId?id=${temp1}`,axiosConfig)
                  .then(function (response) {
                    
                      setformdet((prev) => ({...prev, tbname: response.data.bankname}))
                      console.log(formdet);
                  })
                  .catch(function (error) {
                      console.log("error is here"+error);
                  });
    }
    function getaditya(){
        let tem = 0.025*parseFloat(formdet.famt)
        let tem1 = tem + ''
        setformdet((prev) => ({...prev, charges: tem1}))
    }
   return (
        <div className='outermain'>
            <div className='outerfrom'>
                <div className='boxfrom'>
                    <form onSubmit={submithandler} className='inputfrom' id='loginfrom'>
                        <div className='inside-form-from'>
                            <h2 className='text-effect-from'>From</h2>
                            <div className='form-ele-from'>
                                <input type='number' maxLength='14' name='facc' id='facc' className='facc' placeholder='Enter Acc Number' onKeyUp={getrohith} onChange={e =>{ setformdet({...formdet, facc: e.target.value})}}  pattern="[1-9]{1}[0-9]{13}"title="Please enter exactly 10 digits" value={formdet.facc} required/>
                            </div>
                            <div className='form-ele-from'>
                                <input type='text' name='fname' id='fname' className='fname' placeholder='Enter Name' onChange={e => setformdet({...formdet, fname: e.target.value})} value={formdet.fname} />
                            </div>
                            <div className='form-ele-from'>
                                <input type='number' name='famt' id='famt' className='famt' placeholder='Enter Amount' onKeyUp={getaditya} onChange={e => setformdet({...formdet, famt: e.target.value})} value={formdet.famt} required/>
                            </div>
                            <div className='form-ele-from-dd'>
                                <label for='charges'>Charges (0.25%) : </label>
                                <input type="text" name="charges" className="charges"  value={formdet.charges} diabled></input>
                            </div>
                            <div className='form-ele-from-dd'>
                                <label for='ttype'>Transfer Type : </label>
                                <select id='ttype' defaultValue="" name='ttpye' className='ttype' onChange={e => setformdet({...formdet, ttype: e.target.value})} value={formdet.ttype} required>
                                    <option disabled={true} value="">Transfer Type</option>
                                    <option value='Customer Transfer'>Customer Transfer</option>
                                    <option value='Bank Transfer'>Bank Transfer</option>
                                </select>
                            </div>
                            <div className='form-ele-from-dd'>
                                <label for='mtype'>Message Code : </label>
                                <select id='mtype' defaultValue="" name='mtpye' className='mtype' onChange={e => setformdet({...formdet, mtype: e.target.value})} required value={formdet.mtype}>
                                    <option disabled={true} value="">Message Code</option>
                                    <option value='CHQB'>CHQB</option>
                                    <option value='CORT'>CORT</option>
                                    <option value='HOLD'>HOLD</option>
                                    <option value='INTC'>INTC</option>
                                    <option value='PHOB'>PHOB</option>
                                    <option value='PHOI'>PHOI</option>
                                    <option value='PHON'>PHON</option>
                                    <option value='REPA'>REPA</option>
                                    <option value='SDVA'>SDVA</option>
                                </select>
                            </div>
                            <div className='form-ele-from-dd'>
                                <label for='curtype'>Currency Type : </label>
                                <select id='curtype' defaultValue="" name='curtype' required className='curtype' onChange={(e) => setformdet({...formdet,curtype: e.target.value})} value = {formdet.curtype}>
                                    <option disabled={true} value="">Choose Currency</option>
                                    <option value='1'>$ USD</option>
                                    <option value='2'>€ EUR</option>
                                    <option value='3'>£ GBP</option>
                                    <option value='4'>¥ Yen</option>
                                </select>
                            </div>
                        </div>
                        <div className='inside-form-to'>
                        <h2 className='text-effect-to'>To</h2>
                        <div className='form-ele-to'>
                            <input type='text' name='tname' id='tname' className='tname' placeholder='Enter Name' onChange={e => setformdet({...formdet, tname: e.target.value})} value={formdet.tname} required/>
                        </div>
                        <div className='form-ele-to'>
                            <input type='number' name='tacc' id='tacc' className='tacc' placeholder='Enter Acc Number' onChange={e => setformdet({...formdet, tacc: e.target.value})} value={formdet.tacc} required/>
                        </div>
                        <div className='form-ele-to'>
                            <input type='text' name='bic' id='bic' className='bic' placeholder='Enter BIC' onKeyUp={getsravan} onChange={e => { {setformdet({...formdet, bic: e.target.value})}}} value={formdet.bic} required/>
                        </div>
                        <div className='form-ele-to'>
                            <input type='text' name='tbname' id='tbname' className='tbname' placeholder='Enter Bank Name' onChange={e => setformdet({...formdet, tbname: e.target.value})} value={formdet.tbname} required/>
                        </div>
                    </div>
                    <div>
                    <button type='submit' className='tsubmit' id='tsubmit'>Transfer Now</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}



export default TransferForm