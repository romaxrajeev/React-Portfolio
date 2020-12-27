import React from 'react';
import { Row, Col } from 'reactstrap';
import '../styles/styles.css';

function ContactForm(){
    return(
        <React.Fragment>
            <div className="panel" data-aos="fade-left" data-aos-delay="50" data-aos-duration="300"  style={{height: "100%",width: "100%", display:"block", padding:"10%",paddingTop:"13%", paddingBottom:"15%"}}>
                <Row className="text-center">
                    <Col xs="12">
                        <div className="contact-header align-content-center">
                            Send me a message!
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col xs="12">
                        <form>
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
                                    <textarea type="text" name="message" id="message" rows="6" required />
                                </div>
                            </div>
                            <div className="form-group text-center mt-4">
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