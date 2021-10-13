import React from 'react';
import '../styles/styles.css';
import {Row, Col} from 'reactstrap';

export default function ExtendedWorkComponent({work, type}){
    if(type === "left") {
        return(
            <Row id={work.id} className="mb-5">
            <Col xs="12" md="8">
                <div className="neumorphism-image-container" style={{ backgroundImage : `url(${work.image})` }}></div>
            </Col>
            <Col xs="12" md="4">
                <div className="neumorphism-o" style={{borderRadius: "30px"}}>
                    <Row className="mt-2">
                        <Col xs="12" className="header-project">
                            {work.name}
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col xs="12" className="text-project">
                            {work.overview}
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xs="12"  className="text-project">
                            <div className="text-subheading">Problem</div>
                            {work.problem}
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xs="12" className="text-project">
                            <div className="text-subheading">Solution</div>
                            {work.solution}
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
        );
    }

    if(type === "right") {
        return(
            <Row id={work.id} className="mb-5">
                <Col xs="12" md="4">
                    <div className="neumorphism-o">
                        <Row className="mt-2">
                            <Col xs="12" className="header-project">
                                {work.name}
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col xs="12" className="text-project">
                                {work.overview}
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col xs="12"  className="text-project">
                                <div className="text-subheading">Problem</div>
                                {work.problem}
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col xs="12" className="text-project">
                                <div className="text-subheading">Solution</div>
                                {work.solution}
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col xs="12" md="8">
                    <div className="neumorphism-image-container" style={{ backgroundImage : `url(${work.image})` }}></div>
                </Col>
            </Row>
        );
    }

    return(
       "" 
    );
}