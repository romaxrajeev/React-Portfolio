import React from 'react';
import '../styles/styles.css';
import { Row, Col } from 'reactstrap';
import {Link} from 'react-scroll';
import CircleComponent from './CircleComponent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function HeaderComponent({type}) {
    if(type === "about"){
      return(
        <div style={{height: "100vh"}}>
          <Row className="mt-5 text-center">
            <Col xs="12" md="4"></Col>
            <Col xs="12" md="4">
              <CircleComponent />
            </Col>
            <Col xs="12" md="4"></Col>
          </Row>
            <Row className="mt-4">
              <Col xs="12">
                <div className="header-text text-center" data-aos="fade-up" data-aos-delay="50" data-aos-duration="300">
                  Hi! I'm Romax Rajeev
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs="2"></Col>
              <Col xs="8">
                <Row className="text-center">
                  <Col xs="12" md="4" className="slide-up mt-2 mt-md-0" data-aos="fade-up" data-aos-delay="150" data-aos-duration="300">UI/UX Designer<div className="small-underline ml-auto mr-auto mb-3 mb-md-0 yellow"></div></Col>
                  <Col xs="12" md="4" className="slide-up mt-2 mt-md-0" data-aos="fade-up" data-aos-delay="250" data-aos-duration="300">Web Developer<div className="small-underline ml-auto mr-auto mb-3 mb-md-0 red"></div></Col>
                  <Col xs="12" md="4" className="slide-up mt-2 mt-md-0" data-aos="fade-up" data-aos-delay="350" data-aos-duration="300">Cloud Engineer<div className="small-underline ml-auto mr-auto mb-3 mb-md-0 green"></div></Col>
                </Row>
                <Row className="mt-5 text-center" id="contact">
                  <Col xs="12" md="4"></Col>
                  <Col xs="12" md="4">
                      <Row className="ml-auto mr-auto rounded-rect">
                        <Col xs="4" className="col">
                          <a href="https://www.linkedin.com/in/romax-rajeev/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} color="#383838" size="1x" /></a>&emsp;&emsp;
                        </Col>
                        <Col xs="4" className="col">
                          <a href="https://www.github.com/romeo611199/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} color="#383838" size="1x" /></a>&emsp;&emsp;
                        </Col>
                        <Col xs="4" className="col">
                          <a href="mailto:romaxakrajeev@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} color="#383838" size="1x" /></a>&emsp;&emsp;
                        </Col>
                      </Row>
                    
                  </Col>
                  <Col xs="12" md="4"></Col>
                </Row>
              </Col>
              <Col xs="2"></Col>
            </Row>
        </div>
      );
    }
    return(
        <div style={{height: "100vh"}}>
          <Row className="mt-5 text-center" style={{zIndex : 100}}>
            <Col xs="12" md="4"></Col>
            <Col xs="12" md="4">
              <CircleComponent />
            </Col>
            <Col xs="12" md="4"></Col>
          </Row>
            <Row className="mt-4">
              <Col xs="12">
                <div className="header-text text-center" data-aos="fade-up" data-aos-delay="50" data-aos-duration="300">
                  Hi! I'm Romax Rajeev
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs="2"></Col>
              <Col xs="8">
                <Row className="text-center">
                  <Col xs="12" md="4" className="slide-up mt-2 mt-md-0" data-aos="fade-up" data-aos-delay="150" data-aos-duration="300">UI/UX Designer<div className="small-underline ml-auto mr-auto mb-3 mb-md-0 yellow"></div></Col>
                  <Col xs="12" md="4" className="slide-up mt-2 mt-md-0" data-aos="fade-up" data-aos-delay="250" data-aos-duration="300">Web Developer<div className="small-underline ml-auto mr-auto mb-3 mb-md-0 red"></div></Col>
                  <Col xs="12" md="4" className="slide-up mt-2 mt-md-0" data-aos="fade-up" data-aos-delay="350" data-aos-duration="300">Cloud Engineer<div className="small-underline ml-auto mr-auto mb-3 mb-md-0 green"></div></Col>
                </Row>
                <Row className="mt-5 text-center">
                  <Col xs="12" md="4"></Col>
                  <Col xs="12" md="4">
                  <Link to="works" smooth={true} style={{cursor: "pointer"}}><button className="btn my-work" >Check out my works!</button></Link>
                  </Col>
                  <Col xs="12" md="4"></Col>
                </Row>
              </Col>
              <Col xs="2"></Col>
            </Row>
        </div>
    );
}