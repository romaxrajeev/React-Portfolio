import React from "react";
import { Row, Col } from "reactstrap";
import ThreeLines from "./ThreeLines";

export default function AboutMe() {
    return(
        <div className="mt-2">
            <Row className="mt-5" id="about" data-aos="fade-up" data-aos-duration="100">
                <Col xs ="12">
                    <div className="heading">
                        About Me
                    </div>
                    <ThreeLines />
                </Col>
                <Col xs ="12" lg="6" />
            </Row>
            <Row className="mt-3">
                <Col xs="12" lg="6">
                    <div className="header-text mt-4">
                        <p className="mt-2 mb-3">
                            I am currently working as a Software Engineer at Persistent Systems.
                        </p>
                        <p className="mt-2 mb-3">
                            I have 2 years of Freelance UI Design experience and 4 years as a
                            Graphic Designer. I will be completing the <span className="underline">Professional Certificate in UX Design</span> by Google (Coursera).
                        </p>
                        <p className="mt-2 mb-3 underline">
                            Additionally, I am an <span className="underline"><a target="_blank" rel="noreferrer" href="https://www.credly.com/badges/9d331d45-bf26-4939-bca6-d5acdded291e/public_url">AWS Certified Cloud Practitioner</a></span> and pursue competitive programming as a hobby.
                        </p>
                    </div>
                </Col>
                <Col xs="12" lg="6" style={{marginBottom:"0%"}} className="d-none d-xl-block">
                    {/* <CircleImage /> */}
                </Col>
            </Row>
        </div>
    )
}