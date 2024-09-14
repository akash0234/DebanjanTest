import React, { useEffect } from 'react'
import { getNewGUID } from '../Services/Common/Utility'
const Batch = () => {

  const subHandler = (event) => {
    // Prevent form from submitting and reloading the page
    event.preventDefault();
    console.log(event);
    //const btnElm = document.getElementById("formSubmit")

    let subName = document.getElementById("subName")
    let courseDetail = document.getElementById("detail")
    let courseFee = document.getElementById("courseFee")
    let startingDate = document.getElementById("startingDate")
    let duration = document.getElementById("duration")
    let instructor = document.getElementById("instructor")
    let insQualification = document.getElementById("insQualification")
    const uid = getNewGUID();


    let data = {
      subName: subName.value,
      courseDetail: courseDetail.value,
      courseFee: courseFee.value,
      startingDate: startingDate.value,
      duration: duration.value,
      instructor: instructor.value,
      insQualification: insQualification.value,
      uid: uid
    }

    console.log(data);

    // Stringify the data object
    var payload = JSON.stringify(data);
    console.log(payload); // Check payload in the console

    // Simulate the submission process
    const token = process.env.REACT_APP_JWT_TOKEN; // Your JWT Token

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: payload, // Use the payload here
      redirect: 'follow'
    };

    fetch("http://localhost:4200/batch", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }



 

   const getAllBatch = (()=>{
   
    const token = process.env.REACT_APP_JWT_TOKEN; 
    console.log(token);
     
    const requestOptions = {
      method: 'GET',
      headers: {
        //'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
      },
      
      
    };

    fetch("http://localhost:4200/batch", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

     

   })

    useEffect(()=>{
      getAllBatch();

    },[])


   

  return (
    <div>
      <form method='post' onSubmit={subHandler}>

        <input type='text' name='subName' id='subName' placeholder='subName' />
        <input type='text' name='detail' id='detail' placeholder='courseDetail' />
        <input type='text' name='courseFee' id='courseFee' placeholder='courseFee' />
        <input type='date' name='startingDate' id='startingDate' placeholder='startingDate' />
        <input type='text' name='duration' id='duration' placeholder='duration' />
        <input type='text' name='instructor' id='instructor' placeholder='instructor' />
        <input type='text' name='insQualification' id='insQualification' placeholder='Instructor Qualification' />


        <button type='submit' id='formSubmit'>Submit</button>
      </form>

      <div>

        <table>
          <thead>
            <tr>
              <th>Subjectname</th>
              <th>Details</th>
              <th>CourseFee</th>
              <th>StartingDate</th>
              <th>Duration</th>
              <th>Instructor</th>
              <th>Instructor Qualification</th>
            </tr>


          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

          </tbody>

        </table>
      </div>



    </div>
  )
}

export default Batch;
