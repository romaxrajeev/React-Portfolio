import React from 'react';
import {Row, Col} from 'reactstrap';
import Review from './ReviewComponent';
import ContactForm from './ContactFormComponent';

function ContactReviewComponent(){
    return(
        <React.Fragment>
        <Row className="mt-5" id="contact"></Row>
        <Row className="mt-5">
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

export default ContactReviewComponent;