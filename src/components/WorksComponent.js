import React from 'react';
import {Row,Col} from 'reactstrap';
import '../styles/styles.css';
import {Link} from 'react-router-dom'

function WorksComponent(){
    return(
        <React.Fragment>
            <Row className="mt-5" id="works"></Row>
            <Row className=" mt-5 mb-5">
                <div className="header-text pl-3" data-aos="fade-up" data-aos-duration="200">
                    My Works
                </div>
            </Row>
            <Row className="mt-5 mb-md-5" data-aos="fade-up" data-aos-delay="20" data-aos-duration="200">
                <Col xs="12" md="3" className="align-content-center mt-5 mt-md-0">
                    <Link to="/uiux" style={{textDecoration: "none"}}>
                        <div className="neumorphism-o">
                        <img src="img/uiux1.svg" className="img-fluid m-auto" alt="UIUX Designs" />
                        <p className="works-text">UI/UX Designs</p>
                        </div>
                    </Link>
                </Col>
                <Col xs="12" md="3" className="align-content-center mt-5 mt-md-0">
                    <Link to="/logos" style={{textDecoration: "none"}}>
                        <div className="neumorphism-o">
                            <img src="img/logos1.svg" className="img-fluid m-auto" alt="Logo Designs" />
                            <p className="works-text">Logo Designs</p>
                        </div>
                    </Link>
                </Col>
                <Col xs="12" md="3" className="align-content-center mt-5 mt-md-0">
                    <Link to="/posters" style={{textDecoration: "none"}}>
                        <div className="neumorphism-o">
                            <img src="img/posters1.svg" className="img-fluid m-auto" alt="Poster Designs" />
                            <p className="works-text">Poster Designs</p>
                        </div>
                    </Link>
                </Col>
                <Col xs="12" md="3" className="align-content-center mt-5 mt-md-0">
                    <Link to="/projects" style={{textDecoration: "none"}}>
                        <div className="neumorphism-o">
                            <img src="img/projects1.svg" className="img-fluid m-auto" alt="Dev Projects" />
                            <p className="works-text">Projects</p>
                        </div>
                    </Link>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default WorksComponent;