import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Row, Col } from "reactstrap";
import ThreeLines from "./ThreeLines";
import FlowButton from "./FlowButton";
import { Slide } from "react-reveal";

export default function Header(){
    return(
        <React.Fragment>
            <Row className="main-header mt-5">
                <Col xs ="12" xl="6" className="order-last order-xl-first">
                    <Slide bottom>
                    <div className="header-heading text-center text-xl-left">
                        Self-Taught UI/UX Designer & Developer
                    </div>
                    <div className="subheading-text mt-2 text-center text-lg-left">
                        <FontAwesomeIcon icon={faMapMarkerAlt} color="#FEFEFE" size="1x" />&emsp;Navi Mumbai, India
                    </div>
                    <ThreeLines className="text-center text-lg-left" />
                    <div className="header-text text-center text-lg-left">
                    I craft elegant and smooth human experience for your fabulous ideas, and bring it to life with code. I sometimes create posters, t-shirts and logos as well.
                    </div>
                    <div className="buttons mt-4">
                        <FlowButton name="UI / UX Case Studies" link="uiux" />&emsp;
                        <FlowButton name="Development Projects" link="dev" />
                    </div>
                    </Slide>
                </Col>
                <Col xs ="12" xl="6" className="d-none d-xl-block">
                    <Slide bottom>
                        <img src="/img/illustration.svg" className="img-fluid main-img" alt="UX Designer" />
                    </Slide>
                </Col>
            </Row>
        </React.Fragment>
    )
}