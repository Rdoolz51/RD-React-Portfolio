import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import './App.css';

function App () {
  return (
    <div className='backgroundImg'>
      <Router>

        <>
          <Routes>
            <Route
              path="/RD-React-Portfolio/"
              element={<Home />}>
            </Route>
            <Route
              path="/projects"
              element={<Projects />}>
            </Route>
            <Route
              path="/skills"
              element={<Skills />}>
            </Route>
            <Route
              path="*"
              element={<Navigate to="/RD-React-Portfolio/" />}>
            </Route>
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
