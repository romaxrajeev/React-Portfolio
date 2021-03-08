import React, { Component } from 'react';
import WorksComponent from './WorksComponent';
import '../styles/styles.css';
import { Row, Col } from 'reactstrap';
import {Link} from 'react-scroll';
import Review from './ReviewComponent';
import ContactForm from './ContactFormComponent';
import Typist from 'react-typist';
import Tilt from 'react-tilt';
import '../../node_modules/react-typist/dist/standalone/Typist';
import '../../node_modules/react-typist/dist/Typist.css';

class HomeComponent extends Component{

    render(){
            return(
                <React.Fragment>
                <Row className="mt-5">
                  <Col xs="12" md="6">
                    <div className="header-text pl-3 text-md-left text-center" data-aos="fade-up" data-aos-delay="50" data-aos-duration="300">
                        Hi! I'm Romax Rajeev
                    </div>
                    <Row className="slide-up mt-3 pl-3 text-md-left text-center">
                        <Col xs="4"><Typist cursor={{ hideWhenDone: true }}>UI/UX Designer</Typist></Col>
                        <Col xs="4"><Typist cursor={{ hideWhenDone: true }}>Web Developer</Typist></Col>
                        <Col xs="4"><Typist cursor={{ hideWhenDone: true }}>React Developer</Typist></Col>
                    </Row>
                    <Row className="mt-5 pl-md-3 pl-0 ml-auto mr-auto" data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
                        <div className="text-center text-md-left">
                            <Link to="works" smooth={true} style={{cursor: "pointer"}}><button className="btn my-work ml-auto mr-auto text-center">Check out my Work!</button></Link>
                        </div>
                    </Row>
                  </Col>
                  <Col xs="12" md="6">
                    <Row className="text-center align-content-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="750">
                      <Col xs="12" md="2"></Col>
                      <Col xs="12" md="8">
                        <Tilt className="Tilt" options={{max:50}}>
                        <img src="img/header.png" className="img-fluid d-none d-md-block Tilt-inner text-center" width="2000px" height="1211px" style={{marginTop:"35%"}} alt="Designer"/>
                        </Tilt>
                      </Col>
                      <Col xs="12" md="2"></Col>
                    </Row>
                  </Col>
                </Row>
                <WorksComponent />
                <Row className="mt-5" id="contact">
                        <div className="header-text pl-3" style={{marginTop:"10%"}} data-aos="fade-up">
                            Would like to work with me?
                        </div>
                    </Row>
                    <Row className="mt-5 mb-5">
                        <Col xs="12" md="6" className="mt-5 mt-md-0">
                            <Review />
                        </Col>
                        <Col xs="12" md="6" className="mt-5 mt-md-0">
                            <Row>
                                <Col xs="12" md="2"></Col>
                                <Col xs="12" md="10">
                                    <ContactForm />
                                </Col>  
                            </Row>
                        </Col>
                    </Row>
                </React.Fragment>
            );
        }
    }


export default HomeComponent;