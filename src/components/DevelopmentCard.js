import React from "react";
import { Row,Col } from "reactstrap";
import FlowButton from "./FlowButton";
export default function DevelopmentCard({work}) {
    return(
        <Row className="mt-4 projects" key={work.id}>
            <Col xs="2" className="d-none d-lg-block">
                <img src={work.image} className="img-fluid" alt={work.name} />
            </Col>
            <Col xs="12" lg="6">
                <div className="project-title">
                    {work.name}
                </div>
                <div className="project-desc">
                    {work.desc}
                </div>
                <div className="mt-2">
                    <FlowButton link = {work.button1.link} name = {work.button1.type} type="non-smooth" />
                </div>
            </Col>
            <Col xs="12" lg="4" className="d-none d-lg-block">
                <div className="techstack">
                    Tech Stack: {work.techStack}
                </div>
            </Col>
        </Row>
    )
}