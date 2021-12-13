import React from "react";
import { Slide } from "react-reveal";
import { Row, Col } from "reactstrap";
import { WORKS } from "../shared/Data";
import Accordion from "./Accordion";
import ThreeLines from "./ThreeLines";

export default function OtherDesigns(){
    return (
        <React.Fragment>
            <Slide bottom>
            <Row className="mt-5" id="other-designs"> 
                <Col xs ="12">
                    <div className="heading">
                        Other Designs
                    </div>
                    <ThreeLines />
                    <div className="header-text mt-4">
                        This includes Logo Designs and some Poster Designs for clients and personal projects.
                    </div>
                </Col>
                <Col xs ="12" lg="6" />
            </Row>
            </Slide>
            <Row className="mt-3">
                <Accordion category={WORKS} />
            </Row>
        </React.Fragment>
    )
}