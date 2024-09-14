

import React, { useState } from 'react'

const Cities = () => {

  const [countryResults, setResult] = useState({})


  const btnSubmit = (() => {
    var countryEle = document.getElementById("countryName")
    // console.log(countryResults);
    var countryName = countryEle.value
    // Create the JSON object
    var data = {
      country: countryName,
      
    };
    let payload = JSON.stringify(data);
    console.log(payload);
    
    var requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: payload, // Convert the JSON object to a string
      redirect: 'follow'
    };

    fetch("https://countriesnow.space/api/v0.1/countries/cities", requestOptions)
      .then(response => response.json())  // Parse the response as JSON
      .then(result => {
        setResult(result);
        console.log(result);
      })
      .catch(error => console.log('error', error));

  })

  return (
    <>

      <form method="post">
        <label htmlFor="countryName">Enter Country</label>
        <input type="text" name="countryName" id="countryName" />

        <button onClick={btnSubmit} id="formSubmit" type="button"> Search </button>

      </form>

      {countryResults.data != null && countryResults.data.length > 0 ?
          (
            <ul>
              {countryResults.data.map((city, index) => (
                <li key={city}>{city}</li>
            ))}
            </ul>
           
          ) 
          :
          (
           <div>No Cities Found</div>
          )}



    </>


  )



}

export default Cities