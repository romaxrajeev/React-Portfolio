import React from 'react';
import '../styles/styles.css';
import {Row, Col} from 'reactstrap';
import HeaderComponent from './HeaderComponent';
import { Component } from 'react';
import ScrollToTop from "react-scroll-to-top";

export default class AboutComponent extends Component {
    componentDidMount(){
        window.scrollTo(0,window.innerHeight);
    }
    render(){
        return(
            <React.Fragment>
                <ScrollToTop smooth />
                <HeaderComponent type="about" />
                <Row className="mt-3" data-aos="fade-up" data-aos-delay="100" data-aos-duration="300">
                    <Col xs="12" md="1"></Col>
                    <Col xs="12" md="10">
                        <div className="header-text" style={{marginTop:"7%"}}>
                            About Me
                        </div>
                        <div className="slide-up">
                            <ul>
                            <li><p className="mt-3">I'm currently a Software Engineer at Persistent Systems, Pune.</p></li>
                            <li><p style={{marginTop: "0%"}}>I graduated as a Computer Engineer in 2021 from Pillai College of Engineering, New Panvel.</p></li>
                            <li><p style={{marginTop: "0%"}}>I work as a Front-end Developer, UI/UX Designer and a Freelance Graphic Designer.</p></li>
                            <li><p style={{marginTop: "0%"}}>I enjoy competitive programming, UX Research and contribution to open source.</p></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5" data-aos="fade-up" data-aos-delay="50" data-aos-duration="300">
                    <Col xs="12" md="1"></Col>
                    <Col xs="12" md="10" className="align-content-center">
                        <div className="header-text" style={{marginTop:"7%"}}>
                            Skills
                        </div>
                        <Row className="mt-5" data-aos="fade-up" data-aos-delay="100" data-aos-duration="300">
                            <Col xs="12">
                            <div className="skills-text">Front-End Development</div>
                                <div className="neumorphinner mt-4 p-4">
                                    <Row>
                                        <Col xs="6" md="2"  className="mt-0" style={{display: "flex", alignItems: "center"}}>
                                            <img src="img/html5.svg" className="img-fluid text-center skills-img" alt="HTML5" />
                                        </Col> 
                                        <Col xs="6" md="2" className="mt-0" style={{display: "flex", alignItems: "center", alignContent: "center"}}>
                                            <img src="img/css3.svg" className="img-fluid text-center skills-img" alt="CSS3" />    
                                        </Col> 
                                        <Col xs="6" md="2"  className="mt-3 mt-md-0" style={{display: "flex" , alignItems: "center"}}>
                                            <img src="img/js.svg" className="img-fluid text-center skills-img" alt="JS" />    
                                        </Col> 
                                        <Col xs="6" md="2"  className="mt-3 mt-md-0" style={{display: "flex", alignItems: "center"}}>
                                            <img src="img/react.svg" className="img-fluid text-center skills-img" alt="React" />    
                                        </Col> 
                                        <Col xs="6" md="2"  className="mt-3 mt-md-0" style={{display: "flex", alignItems: "center"}}>
                                            <img src="img/bootstrap.svg" className="img-fluid text-center skills-img" alt="Bootstrap" />    
                                        </Col> 
                                        <Col xs="6" md="2"  className="mt-3 mt-md-0" style={{display: "flex", alignItems: "center"}}>
                                            <img src="img/sass.svg" className="img-fluid text-center skills-img" alt="Sass" />    
                                        </Col>     
                                    </Row>
                                </div>    
                            </Col>                        
                        </Row>
    
                        <Row className="mt-5" data-aos="fade-up" data-aos-delay="100" data-aos-duration="300">
                            <Col xs="12">
                            <div className="skills-text">Back-End Development</div>
                                <div className="neumorphinner mt-4 p-4">
                                    <Row>
                                        <Col xs="6" md="2"  className="mt-0" style={{display: "flex", alignItems: "center"}}>
                                            <img src="img/php.svg" className="img-fluid text-center skills-img" alt="PHP" />    
                                        </Col> 
                                        <Col xs="6" md="2" className="mt-0" style={{display: "flex", alignItems: "center", alignContent: "center"}}>
                                            <img src="img/flask.svg" className="img-fluid text-center skills-img" alt="Flask" />    
                                        </Col> 
                                        <Col xs="6" md="2"  className="mt-3 mt-md-0" style={{display: "flex" , alignItems: "center"}}>
                                            <img src="img/mysql.svg" className="img-fluid text-center skills-img" alt="MySQL" />
                                        </Col> 
                                        <Col xs="6" md="2"  className="mt-3 mt-md-0" style={{display: "flex", alignItems: "center"}}>
                                            <img src="img/firebase.svg" className="img-fluid text-center skills-img" alt="Firebase" />    
                                        </Col> 
                                        <Col xs="6" md="2"  className="mt-3 mt-md-0" style={{display: "flex", alignItems: "center"}}>
                                            <img src="img/mongodb.svg" className="img-fluid text-center skills-img" alt="MongoDB" />    
                                        </Col> 
                                        <Col xs="6" md="2"  className="mt-3 mt-md-0" style={{display: "flex", alignItems: "center"}}>
                                            
                                        </Col>     
                                    </Row>
                                </div>    
                            </Col>                        
                        </Row>
    
                        <Row className="mt-5" data-aos="fade-up" data-aos-delay="150" data-aos-duration="300">
                            <Col xs="12">
                            <div className="skills-text">UI/UX and Graphic Design</div>
                                <div className="neumorphinner mt-4 p-4">
                                    <Row>
                                        <Col xs="6" md="2"  className="mt-0" style={{display: "flex", alignItems: "center"}}>
                                            <img src="img/illustrator.svg" className="img-fluid text-center skills-img" alt="Adobe Illustrator" />    
                                        </Col> 
                                        <Col xs="6" md="2" className="mt-0" style={{display: "flex", alignItems: "center", alignContent: "center"}}>
                                            <img src="img/photoshop.svg" className="img-fluid text-center skills-img" alt="Adobe Photoshop" />    
                                        </Col> 
                                        <Col xs="6" md="2"  className="mt-3 mt-md-0" style={{display: "flex" , alignItems: "center"}}>
                                            <img src="img/adobexd.svg" className="img-fluid text-center skills-img" alt="Adobe XD" />    
                                        </Col> 
                                        <Col xs="6" md="2"  className="mt-3 mt-md-0" style={{display: "flex", alignItems: "center"}}>
                                            <img src="img/corel.svg" className="img-fluid text-center skills-img" alt="Corel Draw" />    
                                        </Col> 
                                        <Col xs="6" md="2"  className="mt-0" style={{display: "flex", alignItems: "center"}}>
                                        </Col> 
                                        <Col xs="6" md="2"  className="mt-0" style={{display: "flex", alignItems: "center"}}>
                                        </Col>     
                                    </Row>
                                </div>    
                            </Col>                        
                        </Row>
                    </Col>
                    <Col xs="12" md="1"></Col>
                </Row>
                <Row className="mt-5 mb-5" data-aos="fade-up" data-aos-delay="50" data-aos-duration="300">
                    <Col xs="12" md="1"></Col>
                    <Col xs="12" md="10">
                        <div className="header-text" style={{marginTop:"7%"}}>
                            Internships
                        </div>
    
                        <Row className="mt-5" data-aos="fade-up" data-aos-delay="50" data-aos-duration="300">
                            <Col xs="12">
                                <div className="neumorphism-o p-5">
                                    <div className="internHeader">
                                        Graphic Design Intern - Infiniti Group
                                    </div>
                                    <div className="internDetails">
                                        Created brochures, social media posts for Infiniti Group.
                                    </div>
                                </div>
                            </Col>
                        </Row>
    
                        <Row className="mt-5" data-aos="fade-up" data-aos-delay="50" data-aos-duration="300">
                            <Col xs="12">
                                <div className="neumorphism-o p-5">
                                    <div className="internHeader">
                                        UI/UX Design Project - Home Automation
                                    </div>
                                    <div className="internDetails">
                                        Created a UI design for an home automation app. Designed a layout which helped users navigate through various sections with minimal interactions.
                                    </div>
                                </div>
                            </Col>
                        </Row>
    
                        <Row className="mt-5" data-aos="fade-up" data-aos-delay="50" data-aos-duration="300">
                            <Col xs="12">
                                <div className="neumorphism-o p-5">
                                    <div className="internHeader">
                                        E-Portfolio Website Design - Pillai College
                                    </div>
                                    <div className="internDetails">
                                    Created a E-Portfolio template for students of Pillai Group of Institutions for showcasing their resume digitally. It was built using HTML, CSS, JS, Bootstrap and Animate On Scroll library.
                                    </div>
                                </div>
                            </Col>
                        </Row>
    
                        <Row className="mt-5" data-aos="fade-up" data-aos-delay="50" data-aos-duration="300">
                            <Col xs="12">
                                <div className="neumorphism-o p-5">
                                    <div className="internHeader">
                                        Graphic Design Intern - Sporcial
                                    </div>
                                    <div className="internDetails">
                                    Designed the logo for Sporcial - a sports startup in Vashi. Also created digital marketing ads for promotional events, flyers, banners for physical events and various other business merchandise.
                                    </div>
                                </div>
                            </Col>
                        </Row>
    
                    </Col>
                    <Col xs="12" md="1"></Col>
                </Row>
            </React.Fragment>
        );
    }
    
}