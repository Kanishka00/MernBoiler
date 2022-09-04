import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function BasicExample() {
  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [telephone,setTelephone] = useState("");

  const addData = (e) =>{
    e.preventDefault();

    const data = {
      name,
      telephone
    }

    console.log(data);



    axios.post("http://localhost:5000/Student/add",data).then(()=>{
      alert("Student added successfully")
      navigate(-1);
    }).catch((e)=>{
      alert(e);
    })


    
      
  }

  return (
    <Container>
        
    <Form onSubmit={addData}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" onChange={(e) =>{setName(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter your mobile number" onChange={(e) =>{setTelephone(e.target.value)}}/> 
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default BasicExample;