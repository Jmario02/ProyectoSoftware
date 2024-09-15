import React from "react";

import Navbar from "../../components/Navbar";
import ServiceList from "../../components/service/ServiceList";
import Footer from "../../components/Footer";

const Services = () => {
    return (
        <div>
            <Navbar />
            <ServiceList />
            <Footer/>
        </div>
    )
}

export default Services