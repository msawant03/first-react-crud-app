import React, {useState , useEffect} from "react";
import {Button, Form} from "react-bootstrap";
import "../css/bootstrap.min.css";
import Employee from "./Employee";
import {v4 as uuid} from "uuid";
import {Link, useNavigate} from "react-router-dom";


function Edit() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [id, setId] = useState("");

    let history = useNavigate();


    var index = Employee.map(function (e) {
        return e.Id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Employee[index];
        // a.Name = name;
        // a.Age = age;
        // a.Id = id;
        
        
        
        if (index >= 0 && index < Employee.length) {
            let a = Employee[index];
            a.Name = name;
            a.Age = age;
            a.Id = id;
    
            history.push("/");
        } else {
            console.error("Invalid index or index out of bounds");
            // Handle the error, redirect, or display an error message as needed.
        }

        history("/");
    }


    useEffect(() => {
        setId(localStorage.getItem("Id"));
        setName(localStorage.getItem("Name"));
        setAge(localStorage.getItem("Age"));
    }, [])


    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem" }}>
                <Form.Group className="mb-3" controlId="formName">
                    
                    <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    
                    <Form.Control type="text" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} />
                </Form.Group>
                <button className="btn btn-primary" type="submit" onClick={(e) => handleSubmit(e)}>Update</button>
            </Form>
        </div>
    )

}

export default Edit;