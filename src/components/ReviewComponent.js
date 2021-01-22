import React from 'react';
import '../styles/styles.css';
import {Row, Col} from 'reactstrap';

function Review(){
    return(
        <React.Fragment>
            <Row className="text-center review-text" data-aos="fade-up" data-aos-delay="50" data-aos-duration="300">
                <Col xs="2"></Col>
                <Col xs="8">
                    Some honest feedback by my clients and faculties!
                </Col>
                <Col xs="2"></Col>
            </Row>
            <Row className="mt-5" data-aos="fade-right" data-aos-delay="50" data-aos-duration="300">
                <Col xs="12">
                    <div className="panel" style={{paddingTop: "4%",paddingBottom: "2%",paddingRight: "5%",paddingLeft: "5%", display:"block"}}>
                        <p className="text-center reviews">"It's an awesome experience!"</p>
                        <p className="review-author text-center">-Mr. ABC, XYZ</p>
                    </div>
                </Col>
            </Row>
            <Row className="mt-5" data-aos="fade-right" data-aos-delay="50" data-aos-duration="300">
                <Col xs="12">
                <div className="panel" style={{paddingTop: "4%",paddingBottom: "2%",paddingRight: "5%",paddingLeft: "5%", display:"block"}}>
                        <p className="text-center reviews">"It's an awesome experience!"</p>
                        <p className="review-author text-center">-Mr. ABC, XYZ</p>
                    </div> 
                </Col>
            </Row>
            <Row className="mt-5" data-aos="fade-right" data-aos-delay="50" data-aos-duration="300">
                <Col xs="12">
                <div className="panel" style={{paddingTop: "4%",paddingBottom: "2%",paddingRight: "5%",paddingLeft: "5%", display:"block"}}>
                        <p className="text-center reviews">"It's an awesome experience!"</p>
                        <p className="review-author text-center">-Mr. ABC, XYZ</p>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default Review;