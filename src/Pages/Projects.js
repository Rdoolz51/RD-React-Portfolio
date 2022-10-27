import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Project from "../components/Project";
import dndLandingPage from '../assets/images/dndLandingPage.png';
import boardgametrackerss from '../assets/images/boardgametrackerss.jpg';
import choreboardss from '../assets/images/choreboardss.jpg';
import placeholderimg from '../assets/images/placeholderimg.png';
const Projects = () => {
    return (
        <>
            <Header />
            <div>
                <h1 className="m-0 mt-5">These projects demonstrate my journey from working with basic html and css to creating full stack webpages</h1>
            </div>
            <div className="container d-flex p-5">
                <Project img={dndLandingPage} title="D&D Character Creation Tool" description="A tool that creates a randomized character for you. You can also input specfic details about your character if you want to as well" link="https://rdoolz51.github.io/DDCharacterCreationPersonal/" />
                <Project img={boardgametrackerss} title="Board Game Tracker" description="Allows the user to make a list of board games from a database. The list can be filtered by category, name, number of players, time to play, etc..." link="https://board-g4me-tracker.herokuapp.com/" />
                <Project img={choreboardss} title="Chore-Board" description="Chore Board is a website that allows parents to post a list of chores. The children listed on the account can complete chores to earn points to spend on custom rewards!" link="https://chore-board.herokuapp.com/" />
                <Project img={placeholderimg} title="Placeholder Name" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
            </div>
            <Footer />
        </>
    );
};

export default Projects;