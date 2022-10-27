import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './bio.css';
import placeholderimg from '../../assets/images/placeholderimg.png';

const Bio = () => {
    return (
        <div className="Title">
            <h1 className="">Hey, my name is Ryan Dooley and I'm a full stack developer!</h1>
            <img className="" alt="decorative" src={placeholderimg} />
        </div>
    );
};

export default Bio;