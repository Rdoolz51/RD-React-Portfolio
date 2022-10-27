import React from "react";
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './navigation.css';

const Navigation = () => {
    return (
        <div className="container-fluid p-0">
            <Nav ActiveKey='/' className="fs-2 bg-dark  w-100 d-flex justify-content-center">
                <Nav.Item>
                    <Nav.Link href='/' className="navLink--navigation">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/projects' className="navLink--navigation">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/skills' className="navLink--navigation">Skills</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Navigation;