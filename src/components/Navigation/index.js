import React from "react";
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './navigation.css';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="container-fluid p-0">
            <Nav className="fs-2 bg-dark  w-100 d-flex justify-content-center">
                <Nav.Item>
                    <Link to='/' className="navLink--navigation">Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to='/projects' className="navLink--navigation">Projects</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to='/skills' className="navLink--navigation">Skills</Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Navigation;