// For each project you feature in your portfolio, you should include the following:

// An image of the deployed application (either a GIF or a screenshot)

// The title of the project

// A link to the deployed application

// A link to the corresponding GitHub repository
import React from "react";
import { Card, Button } from 'react-bootstrap';
import './project.css';

const Project = (props) => {
    return (
        <Card style={{ width: '18rem' }} className="bg-dark text-white m-2">
            <Card.Img variant="top" src={props.img} style={{ height: "40%", minHeight: "40%" }} />
            <Card.Body style={{ height: '20rem' }}>
                <Card.Title className="fs-4 fw-bold" style={{ minHeight: '2rem' }}>{props.title}</Card.Title>
                <Card.Text className="">
                    {props.description}
                </Card.Text>
                <Button variant="primary" target="_blank" href={props.link} className="mt-4">See it Live!</Button>
            </Card.Body>
        </Card>
    );
};

export default Project;