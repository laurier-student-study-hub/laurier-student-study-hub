import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/Herosection";
import Navbar from "../components/Navbar";
import InfoSection from "../components/Infosection";
import { homeObjOne } from "../components/Infosection/Data";
import { homeObjTwo } from "../components/Infosection/Data";
import { homeObjThree } from "../components/Infosection/Data";
import Footer from "../components/Footer";
import {logoimage} from "../components/Sidebar/Data"

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} {...logoimage} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    );
};

export default Home;
