import React from "react"
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from "../components/home"


const MyRoute = () => {

    return (
        <Router>
           <Routes>
            <Route path="/home"  element ={<Home /> } />
           </Routes>
        </Router>
      );
       
    
    };

export default MyRoute;