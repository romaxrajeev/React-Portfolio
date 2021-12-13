import React from "react";
import { Row, Col } from "reactstrap";
import ThreeLines from "./ThreeLines";
import {APIKEY} from '../shared/APIKey';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDribbble, faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
    return(
        <div className="mt-2">
            <Row className="mt-5" id="contact">
                <Col xs ="12" lg="5">
                    <div className="heading">
                        Contact Me
                    </div>
                    <ThreeLines />
                    <div className="header-text mt-2">Send me a message or contact on my social profile.</div>
                    <form name="contact" action="https://api.web3forms.com/submit" method="post" className="mt-4" >
                            <input type="hidden" name="apikey" value={APIKEY} />
                            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                            <div className="form-group mt-1">
                                <label htmlFor="email">Name:</label>
                                <br />
                                <div className="input-field">
                                    <input type="text" name="name" id="name" placeholder="Enter your Name" required />
                                </div>
                            </div>
                            <div className="form-group mt-1">
                                <label htmlFor="email">Email:</label>
                                <br />
                                <div className="input-field">
                                    <input type="text" name="email" id="email" placeholder="Enter your Email" required />
                                </div>
                            </div>
                            <div className="form-group mt-4">
                                <label htmlFor="message">Message:</label>
                                <br />
                                <div className="input-field">
                                    <textarea type="text" name="message" id="message" placeholder="Enter your Message" rows="5" required />
                                </div>
                            </div>
                            <div className="form-group mt-4">
                                <button className="bordered-button background-slide" type="submit" value="sendMsg">
                                    <span className="buttonName">Send Message</span>
                                </button>
                            </div>
                        </form>
                </Col>
                <Col xs="12" lg="1"></Col>
                <Col xs ="12" lg="6" className="mt-4 mt-lg-0">
                    <div className="heading">
                        Social Profiles
                    </div>
                    <Row className="social-icons mt-4">
                        <div className="social mt-2 mt-lg-0">
                            <div className="social-icon background">
                                    <a href="https://dribbble.com/desmaxdesigns" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faDribbble} size="2x" />
                                    </a>
                            </div>
                        </div>
                        <div className="social mt-2 mt-lg-0">
                            <div className="social-icon background">
                                <a href="https://www.instagram.com/desmax_designs/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </a>
                            </div>
                        </div>
                        <div className="social mt-2 mt-lg-0">
                            <div className="social-icon background">
                                <a href="https://www.linkedin.com/in/romax-rajeev/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                                </a>
                            </div>
                        </div>
                        <div className="social mt-2 mt-lg-0">
                            <div className="social-icon background">
                                <a href="https://github.com/romeo611199" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGithub} size="2x" />
                                </a>
                            </div>
                        </div>
                        <div className="social mt-2 mt-lg-0">
                            <div className="social-icon background">
                                <a href="mailto:romaxakrajeev@gmail.com" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" />
                                </a>
                            </div>
                        </div>                        
                    </Row>
                </Col>
            </Row>
        </div>
    )
}