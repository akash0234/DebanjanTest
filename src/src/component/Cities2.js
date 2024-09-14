import React, { useEffect } from 'react';

const Batch = () => {
  // This useEffect is to handle DOM element interactions similar to the plain JS example you provided
  useEffect(() => {
    const btnElem = document.getElementById("formSubmit");

    let name = document.getElementById("name");
    let detail = document.getElementById("detail");
    let courseFee = document.getElementById("courseFee");
    let startingDate = document.getElementById("startingDate");
    let duration = document.getElementById("duration");
    let instructor = document.getElementById("instructor");
    let insQualification = document.getElementById("insQualification");
    let uid = document.getElementById("uid");

    // Adding event listener for the submit button
    btnElem.addEventListener('click', function () {
      // Build the data object in a similar way to the provided example
      var data = {
        name: name.value,
        detail: detail.value,
        courseFee: courseFee.value,
        startingDate: startingDate.value,
        duration: duration.value,
        instructor: instructor.value,
        insQualification: insQualification.value,
        uid: uid.value
      };

      // Stringify the data object
      var payload = JSON.stringify(data);
      console.log(payload); // Check payload in the console

      // Now simulate the submission process
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
    });
  }, []); // Empty array ensures this effect only runs once, after the component mounts

  return (
    <div>
      <h2>Create New Batch</h2>
      <form>
        <input
          type="text"
          id="name"
          placeholder="Batch Name"
        />
        <input
          type="text"
          id="detail"
          placeholder="Details"
        />
        <input
          type="text"
          id="courseFee"
          placeholder="Course Fee"
        />
        <input
          type="date"
          id="startingDate"
          placeholder="Starting Date"
        />
        <input
          type="text"
          id="duration"
          placeholder="Duration"
        />
        <input
          type="text"
          id="instructor"
          placeholder="Instructor"
        />
        <input
          type="text"
          id="insQualification"
          placeholder="Instructor Qualification"
        />
        <input
          type="text"
          id="uid"
          placeholder="Unique ID"
        />
        <button type="button" id="formSubmit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Batch;
