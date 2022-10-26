import React from "react";
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="container-fluid p-0">
            <footer className="bg-dark text-white d-flex justify-content-center">
                <Nav.Link href="https://www.github.com/Rdoolz51" className="fs-3 " style={{ paddingLeft: "2rem" }}>
                    Rdoolz51 <FaGithub />
                </Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/ryan-dooley-655046120" className="fs-3" style={{ paddingLeft: "2rem" }}>
                    Ryan Dooley <FaLinkedin />
                </Nav.Link>

            </footer>

        </div>
    );
};

export default Footer;