import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import "../css/bootstrap.min.css";
import Employee from "./Employee";
import {v4 as uuid} from "uuid";
import {Link, useNavigate} from "react-router-dom";



function Add() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueid = ids.slice(0, 8);

        Employee.push({Id: uniqueid, Name: name, Age: age});
        

        history("/");
    }



    // const postData = async (e) => {
    //     e.preventDefault();

    //     const ids = uuid();
    //     let uniqueid = ids.slice(0, 3);
    //     Employee.push({Id: uniqueid, Name: name, Age: age});
    //     history("/");

    //     const res = await fetch("https://my-crud-app-7c2ef-default-rtdb.firebaseio.com/user.json", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             name, age
    //         })
    //     });
       
    // }



    return <div>
        <Form className="d-grid gap-2" style={{margin:"15rem" }} method="POST" >
            <Form.Group className="mb-3" controlId="formName">
                
                <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAge">
                
                <Form.Control type="text" placeholder="Enter Age" onChange={(e) => setAge(e.target.value)} />
            </Form.Group>
            <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Submit</button>
        </Form>
    </div>

}

export default Add;