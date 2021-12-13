import React from "react";
import { Row, Col } from "reactstrap";
import ThreeLines from "./ThreeLines";
import { PROJECTS } from "../shared/Data";
import DevelopmentCard from "./DevelopmentCard";
import { Slide } from "react-reveal";

export default function Development() {
    const DEV = PROJECTS.map( (work) => <DevelopmentCard work = {work} key={work.id} /> )
    return(
        <div className="mt-2">
            <Slide bottom>
            <Row className="mt-5" id="dev">
                <Col xs ="12">
                    <div className="heading">
                        Development Projects
                    </div>
                    <ThreeLines />
                    <div className="header-text mt-4">
                        Some of my projects brought to life with code. Includes personal and hackathon based projects.
                    </div>
                </Col>
                <Col xs ="12" lg="6" />
            </Row>
            </Slide>
            <Row className="mt-3">
                <Col xs="12">
                    {DEV}
                </Col>
            </Row>
        </div>
    )
}