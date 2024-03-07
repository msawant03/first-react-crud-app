import React, { useEffect, useState } from 'react';
import {Button, Table} from "react-bootstrap";
import "../css/bootstrap.min.css";
import Employee from "./Employee";
import {Link, useNavigate} from "react-router-dom";
import Sidebar from './Sidebar';


const Home = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

        const toggleSidebar = () => {
            setIsSidebarOpen(!isSidebarOpen);
        };

    let history = useNavigate();

    const handleEdit = (id, name, age) => {
        localStorage.setItem("Name", name);
        localStorage.setItem("Age", age);       
        localStorage.setItem("Id", id);
    }

    const handleDelete = (id) => {
        var index = Employee.map(function (e) {
            return e.Id
        }).indexOf(id);

        Employee.splice(index, 1);

        history("/");
    }
    
        

    
    return (
        <div>
            <h1>Employee List</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                   <th>Id</th> 
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        Employee && Employee.length > 0 
                        ?
                        Employee.map((item) => {
                            return (
                                <tr>
                                    <td>{item.Id}</td>
                                    <td>{item.Name}</td>
                                    <td>{item.Age}</td>
                                    <td>
                                        <Link to={"/edit"}>
                                            <Button variant="primary" onClick={() => handleEdit(item.Id, item.Name, item.Age)}>Edit</Button>&nbsp;
                                        </Link>
                                        <Button variant="primary" onClick={() => handleDelete(item.Id)}>Delete</Button>
                                    </td>
                                </tr>
                            );
                        })
                        :
                        "Data Not Found" 
                    }
                </tbody>
            </Table>

            <br/>
            <br/>

            <Link className="" to={"/create"}>
                <Button size="lg" variant="primary">Creat Employee</Button>
            </Link>

            <div>
                <button className='btn btn-secondary' onClick={toggleSidebar}>Toggle Sidebar</button>
                <Sidebar isOpen={isSidebarOpen} />
            </div>
        </div>
    );
};

export default Home;