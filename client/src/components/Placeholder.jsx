import React from 'react'
import { useEffect, useState } from 'react';

const Placeholder = () => {

        const [data,setData]=useState([]);
      
        const getData=()=>{
      
          fetch("http://localhost:8080/")
            .then((res) => {
              return res.json();
            })
            .then((myJson) => {
              console.log(myJson);
              setData(myJson)
            });
        }
      
        useEffect(()=>{
          getData()
        },[])
      
        return (
          <div className="App">
            <h1>{data.user}</h1>
            <h1>{data.age}</h1>
            <h1>{data.job}</h1>
            <h1>{data.goal}</h1>
          </div>
          
        );
      
}

export default Placeholder