import React from 'react';
import {Row,Col} from 'reactstrap';
import '../styles/styles.css';
import {Link} from 'react-router-dom'

function WorksComponent(){
    return(
        <React.Fragment>
            <Row className="mt-5 mb-5">
                <div className="header-text pl-3" data-aos="fade-up" data-aos-duration="200" id="works">
                    My Works
                </div>
            </Row>
            <Row className="mt-5 mb-md-5" data-aos="fade-up" data-aos-delay="20" data-aos-duration="200">
                <Col xs="12" md="4" className="align-content-center mt-5 mt-md-0">
                    <Link to="/uiux">
                        <div className="neumorphism-o">
                        <img src="img/uiux.svg" className="img-fluid m-auto" alt="UIUX Designs" />
                        </div>
                    </Link>
                </Col>
                <Col xs="12" md="4" className="align-content-center mt-5 mt-md-0">
                    <Link to="/logos">
                        <div className="neumorphism-o">
                            <img src="img/logos.svg" className="img-fluid m-auto" alt="Logo Designs" />
                        </div>
                    </Link>
                </Col>
                <Col xs="12" md="4" className="align-content-center mt-5 mt-md-0">
                    <Link to="/posters">
                        <div className="neumorphism-o">
                            <img src="img/posters.svg" className="img-fluid m-auto" alt="Poster Designs" />
                        </div>
                    </Link>
                </Col>
            </Row>
            <Row className="mt-md-5 mt-3 mb-5" data-aos="fade-up" data-aos-duration="300">
                <Col xs="12" md="4" className="align-content-center mt-5 mt-md-0">
                    <Link to="/tshirts">
                        <div className="neumorphism-o">
                            <img src="img/tshirts.svg" className="img-fluid m-auto" alt="Tshirt Designs" />
                        </div>
                    </Link>
                </Col>
                <Col xs="12" md="4" className="align-content-center mt-5 mt-md-0">
                    <Link to="#">
                        <div className="neumorphism-o">
                            <img src="img/projects.svg" className="img-fluid m-auto" alt="Dev Projects" />
                        </div>
                    </Link>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default WorksComponent;