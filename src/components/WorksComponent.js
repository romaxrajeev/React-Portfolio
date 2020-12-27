import React from 'react';
import {Row,Col} from 'reactstrap';
import '../styles/styles.css';
import NeumorphismOuter from './NeumorphismOuterComponent';

function WorksComponent(){
    return(
        <React.Fragment>
            <Row className="mt-5 mb-5" id="works">
                <div className="header-text pl-3" data-aos="fade-up" data-aos-delay="50" data-aos-duration="300">
                    My Works
                </div>
            </Row>
            <Row className="mt-5 mb-5" data-aos="fade-up" data-aos-delay="20" data-aos-duration="300">
                <Col xs="12" md="4" className="align-content-center mt-5 mt-md-0">
                    <NeumorphismOuter width="100%" height="429px" src="img/uiux.webp" alt="UIUX" display="block" imgHeight="100%" imgWidth="100%" text="UI/UX Designs" link="#" />
                </Col>
                <Col xs="12" md="4" className="align-content-center mt-5 mt-md-0">
                    <NeumorphismOuter width="100%" height="429px" src="img/logos.webp" alt="Logo" display="block" imgHeight="100%" imgWidth="100%" text="Logo Designs" link="#" />
                </Col>
                <Col xs="12" md="4" className="align-content-center mt-5 mt-md-0">
                    <NeumorphismOuter width="100%" height="429px" src="img/posters.webp" alt="Posters" display="block" imgHeight="100%" imgWidth="100%" text="Poster Designs" link="#" />
                </Col>
            </Row>
            <Row className="mt-5 mb-5" data-aos="fade-up" data-aos-delay="10" data-aos-duration="300">
                <Col xs="12" md="4" className="align-content-center mt-5 mt-md-0">
                    <NeumorphismOuter width="100%" height="429px" src="img/tshirts.webp" alt="Tshirt" display="block" imgHeight="100%" imgWidth="100%" text="T-Shirt Designs" link="#" />
                </Col>
                <Col xs="12" md="4" className="align-content-center mt-5 mt-md-0">
                    <NeumorphismOuter width="100%" height="429px" src="img/projects.webp" alt="Dev" display="block" imgHeight="100%" imgWidth="100%" text="Dev. Projects" link="#" />
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default WorksComponent;