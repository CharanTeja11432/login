import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Details from './details';
import FinalData from './finaldata';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/details" element={<Details/>} />
                <Route path="/finaldata" element={<FinalData/>} />
            </Routes>
        </Router>
    );
};

export default App;
