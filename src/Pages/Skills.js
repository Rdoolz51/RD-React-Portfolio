import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io5';
import { SiMysql, SiMongodb, SiGraphql, SiReact, SiCss3, SiHtml5 } from 'react-icons/si';
import 'bootstrap/dist/css/bootstrap.css';


const Skills = () => {
    return (
        <>
            <Header />
            <div className="text-white fw-bold d-flex justify-content-center fs-1 mt-3 mb-5">Skills:</div>
            <div className="text-white fs-1 d-flex justify-content-center flex-wrap">
                <div className="row col-3 p-4 m-2">
                    <div className="btn btn-dark text-white fw-bold border-light p-5 fs-2 disabled opacity-100"><SiHtml5 /> HTML 5</div>
                    <div className="btn btn-dark text-white fw-bold border-light p-5 fs-2 disabled opacity-100"><IoLogoJavascript /> JavaScript</div>
                    <div className="btn btn-dark text-white fw-bold border-light p-5 fs-2 disabled opacity-100"><SiCss3 /> CSS3</div>
                    <div className="btn btn-dark text-white fw-bold border-light p-5 fs-2 disabled opacity-100"><IoLogoNodejs /> NodeJS</div>
                </div>
                <div className="row col-3 p-4 m-2">
                    <div className="btn btn-dark text-white fw-bold border-light p-5 fs-2 disabled opacity-100"><SiMysql /> MySql</div>
                    <div className="btn btn-dark text-white fw-bold border-light p-5 fs-2 disabled opacity-100"><SiMongodb /> MongoDB</div>
                    <div className="btn btn-dark text-white fw-bold border-light p-5 fs-2 disabled opacity-100"><SiGraphql /> GraphQL</div>
                    <div className="btn btn-dark text-white fw-bold border-light p-5 fs-2 disabled opacity-100"><SiReact /> ReactJS</div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Skills;