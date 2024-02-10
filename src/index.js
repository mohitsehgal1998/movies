import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Customers from './Customers';
import Navbar from './Navbar';
import Login from './Login';
import Rentals from './Rentals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
    <Router>
            <Navbar/>
        <Routes>
            <Route path="/customers" element={<Customers />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/login" element={<Login />} />
            <Route path="/movies" element={<App />} />
        </Routes>
    </Router>

    ,document.getElementById('root')
);