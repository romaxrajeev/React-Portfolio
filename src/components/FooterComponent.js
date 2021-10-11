import React from 'react';
import '../styles/styles.css';
import {Row, Col, Container} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function FooterComponent() {
    return(
        <React.Fragment>
            <div className="container-fluid footer">
                <Container>
                    <Row className="pt-4 pb-4">
                        <Col xs="12" md="6" className="text-center" style={{color: "#fff", fontSize: "1.1em" }}>
                        <a href="https://www.facebook.com/romax.rajeev/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} color="#fff" size="1x" /></a>&emsp;
                        <a href="https://www.instagram.com/desmax_designs/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} color="#fff" size="1x" /></a>&emsp;
                        <a href="https://twitter.com/romeo611199" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} color="#fff" size="1x" /></a>&emsp;
                        <a href="https://www.linkedin.com/in/romax-rajeev/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} color="#fff" size="1x" /></a>&emsp;
                        </Col>
                        <Col xs="12" md="6" className="text-center" style={{color: "#fff", fontFamily: "Montserrat", fontSize: "1.1em", fontWeight:"300"}}>
                            &copy; Desmax Designs.
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default FooterComponent;