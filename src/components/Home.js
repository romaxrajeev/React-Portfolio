import React from "react"
import NavBar from './NavBar';
import Header from './Header';
import UiUx from './UiUx';
import Development from './Development';
import OtherDesigns from './OtherDesigns';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Contact from './Contact';


export default function Home() {
    return(
        <React.Fragment>
            <NavBar />
            <Header />
            <UiUx />
            <Development />
            <OtherDesigns />
            <AboutMe />
            <Skills />
            <Contact />
        </React.Fragment>
    )
}