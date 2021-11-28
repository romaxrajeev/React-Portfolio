import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Row, Col } from "reactstrap";
import ThreeLines from "./ThreeLines";
import FlowButton from "./FlowButton";
import Tilt from 'react-tilt';

export default function Header(){
    return(
        <React.Fragment>
            <Row style={{minHeight:"85vh"}}>
                <Col xs ="12" lg="6">
                    <div className="header-heading text-center text-lg-left">
                        Self-Taught UI/UX Designer & Developer
                    </div>
                    <div className="subheading-text mt-2 text-center text-lg-left">
                        <FontAwesomeIcon icon={faMapMarkerAlt} color="#FEFEFE" size="1x" />&emsp;Navi Mumbai, India
                    </div>
                    <ThreeLines className="text-center text-lg-left" />
                    <div className="header-text text-center text-lg-left">
                    I craft elegant and smooth human experience for your fabulous ideas, and bring it to life with code. I sometimes create posters, t-shirts and logos as well.
                    </div>
                    <div className="buttons mt-4 row">
                        <FlowButton name="Check out UI / UX Projects" link="uiux" />&emsp;
                        <FlowButton name="Check out Development Projects" link="dev" />
                    </div>
                </Col>
                <Col xs ="12" lg="6" className="d-none d-lg-block">
                    <Tilt className="Tilt" options={{max:50, speed:500}} >
                        <img src="/img/sideimg.png" className="img-fluid main-img" alt="UX Designer" />
                    </Tilt>
                </Col>
            </Row>
        </React.Fragment>
    )
}