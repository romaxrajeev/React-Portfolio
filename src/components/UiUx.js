import React from "react";
import { Row, Col } from "reactstrap";
import ThreeLines from "./ThreeLines";
import UiUxImage from "./UiUxImage";
import {UIUX} from "../shared/Data";

export default function UiUx(){
    const UIImages = UIUX.projects.map( (work) => <UiUxImage work={work} key={work.id} /> )
    return (
        <div className="mt-3">
            <Row className="mt-5" id="uiux">
                <Col xs ="12">
                    <div className="heading">
                        UI / UX Projects
                    </div>
                    <ThreeLines />
                    <div className="header-text mt-4">
                        Read case studies, thought process and designing the solution for every problem.
                    </div>
                </Col>
                <Col xs ="12" lg="6" />
            </Row>
            <Row className="mt-3">
                {UIImages}
            </Row>
        </div>
    )
}