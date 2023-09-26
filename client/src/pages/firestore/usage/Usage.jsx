import React, { useState, useEffect } from 'react';
import './Usage.scss';
import FApp, { firestore, collection, addDoc } from './../../../firebase';

function Usage() {

  
  const handleonSubmit = async () => {
    try {
      const docRef = await addDoc(collection(firestore, "121212"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    // handleonSubmit();
  }


  return (
    <div>
      <h1>Usage</h1>
      <button className='btn btn-primary' onClick={() => handleonSubmit()}>Submit</button>
    </div>
  )
}

export default Usage