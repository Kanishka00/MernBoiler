/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ViewStudent() {

  const [data,setData] = useState([]);

  
  useEffect( () => {
    let details = [];

    axios.get("http://localhost:5000/Student/").then((users)=>{
      setData(users.data);
      console.log(details);
    })
  }, [])
  
  return (
    <div>
      {
        data.map((elem,id)=>(
          <h3 key={id}>{elem.name}</h3>
        ))
      }
    </div>
  )
}

export default ViewStudent