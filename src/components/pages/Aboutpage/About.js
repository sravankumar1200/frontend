import React from 'react'
import { Chart } from "react-google-charts";
import axios from 'axios';
import { useState } from 'react';
export const data = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
  ];
  
  
  
  export const options = {
    title: "Transactions Overview",
    is3D: true,
  };
  
  

const About = () => {
  axios.defaults.withCredentials = true
  let token1 = localStorage.getItem('tkn');
  let [getbro,setbro] = useState([]);
  let [arr,setarr] = useState([]);
  let axiosConfig = {
   headers: {
       'Authorization': `${token1}`
   }
   };
   function getvidhata(){
   axios.get('http://localhost:8080/transaction/messagecode',axiosConfig)
        .then(function (response) {
            const ar1 = [["label","count"]]
            const res  = ar1.concat(response.data);
            setarr(res);
            console.log(res);
        })
        .catch(function (error) {        
              console.log(error)      
        }); 
        axios.get('http://localhost:8080/transaction/transfercode',axiosConfig)
        .then(function (response) {
            const ar1 = [["label","count"]]
            const res  = ar1.concat(response.data);
            setbro(res);
        })
        .catch(function (error) {        
              console.log(error)      
        }); 
   
      }
      console.log("hi from about")
    return (
        <div>
        <div>
        <button className='tsubmit' onClick={getvidhata}>Transaction Overview</button>
        </div>
        <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={arr}
        options={options}
      />
       <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={getbro}
        options={options}
      />
        </div>
        
    )
}

export default About
