

import React, { useState } from 'react'

const Currencies = () => {


  const [result, setResult] = useState([])
  // const [currency, setCurrency] = useState(null)

  const btnHandler = (() => {

    var countryNameElm = document.getElementById("countryName")
    var countryName = countryNameElm.value
    // console.log(countryName);

    var data = {
      country: countryName
    }

    var requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      redirect: 'follow'
    };
    
    fetch("https://countriesnow.space/api/v0.1/countries/currency", requestOptions)
      .then(response => response.json())
      // .then(result => console.log(result))
      .then (result=>{
        setResult(result)
        console.log(result);
        
      })

      .catch(error => console.log('error', error));
    
      
  })
    
  return (
    <div>

      <input type='text' id='countryName' />

      <button onClick={btnHandler} id="searchBtn" type='button'>Search</button>


      <div>
        
        {result.data != null ?
        ( 
          <p>{result.data.currency}</p>
        )
        :
        (
          <p>not found</p>
        )
      }

        {/* {result.data && result.data.length > 0 ?
          (
            <ul>
              {result.data.map((data, index) => (
                <li key={index}>
                  {data.name} <br />
                  {data.currency}
                </li>
              ))}
            </ul>
          )
          :
          (
            <p>not found</p>
          )

        } */}
      </div>

    </div>



  )
}

export default Currencies