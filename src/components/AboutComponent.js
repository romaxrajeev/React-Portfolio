import React from 'react';
import '../styles/styles.css';
import {Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function AboutComponent() {
    return(
        <React.Fragment>
            <Row className="mt-5" data-aos="fade-up" data-aos-delay="50" data-aos-duration="300">
                <Col xs="12" md="6">
                    <Row>
                        <Col xs="2"></Col>
                        <Col xs="8">
                            <div className="header-text" style={{marginTop: "10%"}}>
                                Hi, I'm Romax Rajeev
                            </div>
                            <div className="slide-up mt-3" style={{fontWeight: "400", fontSize: "1.1em"}}>
                                Computer Engineer & UI/UX Designer
                            </div>
                            <div className="links mt-5" style={{fontWeight: "400", fontSize: "1.1em"}}>
                                <FontAwesomeIcon icon={faEnvelope} color="#4D0000" size="1x" /><a className="link" href="mailto:romaxakrajeev@gmail.com" target="_blank" rel="noreferrer">romaxakrajeev@gmail.com</a><br />
                                <FontAwesomeIcon icon={faGithub} color="#4D0000" size="1x" /><a className="link" href="https://www.github.com/romeo611199" target="_blank" rel="noreferrer">www.github.com/romeo611199</a><br />
                                <FontAwesomeIcon icon={faLinkedin} color="#4D0000" size="1x" /><a className="link" href="https://www.linkedin.com/in/romax-rajeev-269094100/" target="_blank" rel="noreferrer">www.linkedin.com/romax-rajeev</a>
                            </div>
                        </Col>
                        <Col xs="2"></Col>
                    </Row>
                </Col>
                <Col xs="12" md="6">
                    <div className="neumorphism-outer ml-auto mr-auto" style={{margin: 0, padding: 0, width: "250px"}}>
                        <img src="img/me.jpg" height="250px" width="250px" alt="Logo" style={{borderRadius: "20px"}} />
                    </div>
                </Col>
            </Row>
            <Row className="mt-5" data-aos="fade-up" data-aos-delay="100" data-aos-duration="300">
                <Col xs="12" md="1"></Col>
                <Col xs="12" md="10">
                    <div className="header-text" style={{marginTop:"7%"}}>
                        About
                    </div>
                    <div className="slide-up">
                        <p className="mt-3">Computer Engineering Graduating in 2021 from Pillai College of Engineering, New Panvel.</p>
                        <p style={{marginTop: "0%"}}>Front-end Developer, UI/UX Designer and a Freelance Graphic Designer.</p>
                        <p style={{marginTop: "0%"}}>Also, enjoys competitive programming and contribute to open source.</p>
                    </div>
                </Col>
            </Row>
            <Row className="mt-5" data-aos="fade-up" data-aos-delay="50" data-aos-duration="300">
                <Col xs="12" md="1"></Col>
                <Col xs="12" md="10" className="align-content-center">
                    <div className="header-text" style={{marginTop:"7%"}}>
                        Skills
                    </div>
                    <Row className="mt-5" data-aos="fade-right" data-aos-delay="100" data-aos-duration="300">
                        <Col xs="12">
                        <div className="skills-text">Front-End Development</div>
                            <div className="neumorphism-inner mt-4">
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

                    <Row className="mt-5" data-aos="fade-left" data-aos-delay="100" data-aos-duration="300">
                        <Col xs="12">
                        <div className="skills-text">Back-End Development</div>
                            <div className="neumorphism-inner mt-4">
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

                    <Row className="mt-5" data-aos="fade-right" data-aos-delay="100" data-aos-duration="300">
                        <Col xs="12">
                        <div className="skills-text">UI/UX and Graphic Design</div>
                            <div className="neumorphism-inner mt-4">
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
            <Row className="mt-5" data-aos="fade-up" data-aos-delay="50" data-aos-duration="300">
                <Col xs="12" md="1"></Col>
                <Col xs="12" md="10">
                    <div className="header-text" style={{marginTop:"7%"}}>
                        Internships
                    </div>
                    <Row className="mt-5" data-aos="fade-right" data-aos-delay="50" data-aos-duration="300">
                        <Col xs="12">
                            <div className="neumorphism-outer">
                                <div className="internHeader">
                                    UI/UX Design Project - Home Automation
                                </div>
                                <div className="internDetails">
                                    Created a UI design for an home automation app. Designed a layout which 
helped users navigate through various sections with minimal interactions.
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5" data-aos="fade-left" data-aos-delay="50" data-aos-duration="300">
                        <Col xs="12">
                            <div className="neumorphism-outer">
                                <div className="internHeader">
                                    E-Portfolio Website Design - Pillai College
                                </div>
                                <div className="internDetails">
                                Created a E-Portfolio template for students of Pillai Group of Institutions for 
showcasing their resume digitally. It was built using HTML, CSS, JS, 
Bootstrap and Animate On Scroll library.
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5" data-aos="fade-right" data-aos-delay="50" data-aos-duration="300">
                        <Col xs="12">
                            <div className="neumorphism-outer">
                                <div className="internHeader">
                                    Graphic Design Intern - Sporcial
                                </div>
                                <div className="internDetails">
                                Designed the logo for Sporcial - a sports startup in Vashi. Also created 
digital marketing ads for promotional events, flyers, banners for physical 
events and various other business merchandise.
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

export default AboutComponent;