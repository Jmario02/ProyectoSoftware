import React from "react";
import { Route,Routes } from "react-router-dom";

import Home from '../routes/home/Home'
import NotFound from "./notFound/NotFound";
import Specialist from './specialist/Specialist';
import Service from '../routes/service/Service'
import AboutPage from "./about/AboutPage";
import ContactPage from "./contact/ContactPage";


const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} /> 
            <Route path="specialist" element={<Specialist />} />
            <Route path="services" element={<Service />}/>
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
        </Routes>
    )
}

export default AppRoutes;