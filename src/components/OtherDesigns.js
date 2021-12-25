import React from "react";
import { Row, Col } from "reactstrap";
import { WORKS } from "../shared/Data";
import Accordion from "./Accordion";
import ThreeLines from "./ThreeLines";

export default function OtherDesigns(){
    return (
        <React.Fragment>
            <Row style={{marginTop:"8%"}} id="other-designs"> 
                <Col xs ="12">
                    <div className="heading">
                        Other Designs
                    </div>
                    <ThreeLines />
                    <div className="header-text mt-4">
                        This includes Logo Designs and some Poster Designs for clients and personal projects. Hover on each card to know more.
                    </div>
                </Col>
                <Col xs ="12" lg="6" />
            </Row>
            <Row className="mt-3">
                <Accordion category={WORKS} />
            </Row>
        </React.Fragment>
    )
}