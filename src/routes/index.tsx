import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Attendance from '../pages/Attendance';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Home />} />
                <Route path="/class" element={<Attendance />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;