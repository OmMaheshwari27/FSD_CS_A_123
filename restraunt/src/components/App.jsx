import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Dashboard from './Dashboard';
import Logout from './Logout';
import Login from "./Login";
const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/Register" element={<Register />}></Route>
                <Route path="/Dashboard" element={<Dashboard/>}></Route>
                <Route path="/Logout" element={<Logout />}></Route>
             <Route path="*" element={<h1>error 404</h1>}></Route>
            </Routes>
        </div>
    )
}
export default App;