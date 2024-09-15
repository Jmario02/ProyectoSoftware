import React from "react";
import Navbar from "../../components/Navbar";
import Banner from "../../components/home/Banner";
import Services from "../../components/home/Services";
import Footer from "../../components/Footer";

const Home  = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Services />
            <Footer />
        </div>
    )
}

export default Home;