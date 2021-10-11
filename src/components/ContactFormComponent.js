import React from 'react';
import { Row, Col } from 'reactstrap';
import '../styles/styles.css';
import 'jquery';

function ContactForm(){
    return(
        <React.Fragment>
            <div className="panel" data-aos="flip-left" data-aos-duration="700" style={{height: "100%",width: "100%", display:"block", padding:"10%",paddingTop:"13%", paddingBottom:"15%"}}>
                <Row className="text-center">
                    <Col xs="12">
                        <div className="contact-header align-content-center">
                            Send me a message!
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col xs="12">
                        <form name="contact" action="https://api.web3forms.com/submit" method="post" >
                            <input type="hidden" name="apikey" value="2be25e8e-c56e-4e9c-920a-029c5325c38f" />
                            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                            <div className="form-group mt-1">
                                <label htmlFor="email">Email:</label>
                                <br />
                                <div className="neumorphinner">
                                    <input type="text" name="email" id="email" required />
                                </div>
                            </div>
                            <div className="form-group mt-4">
                                <label htmlFor="message">Message:</label>
                                <br />
                                <div className="neumorphinner">
                                    <textarea type="text" name="message" id="message" rows="5" required />
                                </div>
                            </div>
                            <div className="form-group text-center mt-5">
                                <button type="submit" className="btn my-work"  value="sendMsg">Send Message!</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
}

export default ContactForm;