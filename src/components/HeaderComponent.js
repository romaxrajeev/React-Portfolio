import React from 'react';
import '../styles/styles.css';
import '../../node_modules/neumorphism-css/dist/css/neumorphism.min.css';
import '../../node_modules/neumorphism-css/dist/js/neumorphism';
import '../../node_modules/jquery/dist/jquery';
import { Row, Col } from 'reactstrap';
import {Link} from 'react-scroll';
function HeaderComponent() {
    return(
        <Row className="mt-5">
          <Col xs="12" md="6">
            <div className="header-text pl-3" data-aos="fade-up" data-aos-delay="50" data-aos-duration="300">
                Hi! I'm Romax Rajeev
            </div>
            <Row className="slide-up mt-3 pl-3">
                <Col xs="12" md="4" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">UI/UX Designer</Col>
                <Col xs="12" md="4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">Web Developer</Col>
                <Col xs="12" md="4" data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">React Developer</Col>
            </Row>
            <Row className="mt-5 pl-3" data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
                <Link to="works" smooth={true} style={{cursor: "pointer"}}><button className="btn my-work">Check out my Work!</button></Link>
            </Row>
          </Col>
          <Col xs="12" md="6">
            <Row className="text-center align-content-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="750">
              <Col xs="12" md="2"></Col>
              <Col xs="12" md="8">
                <div className="neumorphism-outer mt-3 mt-md-5" style={{width: "100%"}}>
                  <img src="img/designer.png" class="img-fluid" width="318px" height="300px"/>
                </div>
              </Col>
              <Col xs="12" md="2"></Col>
            </Row>
          </Col>
        </Row>
    );
}

export default HeaderComponent;