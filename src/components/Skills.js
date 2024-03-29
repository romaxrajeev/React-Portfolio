import React from "react";
import { Row, Col } from "reactstrap";
import ThreeLines from "./ThreeLines";

export default function Skills() {
    return(
        <div style={{marginTop:"8%"}}>
            <Row className="mt-5" id="about">
                <Col xs="12">
                    <div className="heading">
                        Skills
                    </div>
                    <ThreeLines />
                </Col>
                <Col xs ="12" lg="6" />
            </Row>
            <Row className="mt-3">
                <Col xs="12">
                    <div className="header-text mt-2">UI / UX and Graphic Design Tools</div>
                    <Row className="skills-container mt-3 mb-3 pt-5 pb-2 pr-3 pl-3 pl-3 pr-3">
                        <Col xs="12">
                            <Row className="pb-3 skills">
                                <Col xs="6" md="2">
                                    <div className="skills mt-md-0">
                                        <img src="img/adobexd.svg" className="img-fluid svg text-center" alt="adobexd" />
                                    </div>
                                </Col> 
                                <Col xs="6" md="2">
                                    <div className="skills mt-md-0">
                                        <img src="img/figma.svg" className="img-fluid svg text-center" alt="figma" />
                                    </div>
                                </Col> 
                                <Col xs="6" md="2">
                                    <div className="skills mt-3 mt-md-0">
                                        <img src="img/illustrator.svg" className="img-fluid svg text-center" alt="illustrator" />
                                    </div>
                                </Col> 
                                <Col xs="6" md="2">
                                    <div className="skills mt-3 mt-md-0">
                                        <img src="img/photoshop.svg" className="img-fluid svg text-center" alt="photoshop" />
                                    </div>
                                </Col> 
                                <Col xs="6" md="2">
                                    <div className="skills mt-3 mt-md-0">
                                        <img src="img/corel.svg" className="img-fluid svg text-center" alt="corel draw" /> 
                                    </div>
                                </Col>
                                <Col xs="6" md="2">
                                    
                                </Col> 
                            </Row>
                            <Row className="d-none d-lg-flex">
                                <Col xs="12" lg="2">
                                    <p className="header-text text-center mt-3">Adobe XD</p>
                                </Col>
                                <Col xs="12" lg="2">
                                    <p className="header-text text-center mt-3">Figma</p>
                                </Col>
                                <Col xs="12" lg="2">
                                    <p className="header-text text-center mt-3">Illustrator</p>
                                </Col>
                                <Col xs="12" lg="2">
                                    <p className="header-text text-center mt-3">Photoshop</p>
                                </Col>
                                <Col xs="12" lg="2">
                                    <p className="header-text text-center mt-3">Corel Draw</p>
                                </Col>
                                <Col xs="12" lg="2">
                                    
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <div className="header-text mt-5">Front-End Development</div>
                    <Row className="skills-container mt-3 mb-3 pt-5 pb-2 pr-3 pl-3">
                        <Col xs="12">
                            <Row className="pb-3 skills">
                                <Col xs="6" md="2">
                                    <div className="skills">
                                        <img src="img/html5.svg" className="img-fluid svg text-center" alt="HTML5" />
                                    </div>
                                </Col> 
                                <Col xs="6" md="2">
                                    <div className="skills">
                                        <img src="img/css3.svg" className="img-fluid svg text-center" alt="CSS3" />
                                    </div>
                                </Col> 
                                <Col xs="6" md="2">
                                    <div className="skills mt-3 mt-md-0">
                                        <img src="img/js.svg" className="img-fluid svg text-center" alt="JS" />
                                    </div>
                                </Col> 
                                <Col xs="6" md="2">
                                    <div className="skills mt-3 mt-md-0">
                                        <img src="img/react.svg" className="img-fluid svg text-center" alt="React" />
                                    </div>
                                </Col> 
                                <Col xs="6" md="2">
                                    <div className="skills mt-3 mt-md-0">
                                        <img src="img/bootstrap.svg" className="img-fluid svg text-center" alt="Bootstrap" /> 
                                    </div>
                                </Col>
                                <Col xs="6" md="2">
                                    <div className="skills mt-3 mt-md-0">
                                        <img src="img/sass.svg" className="img-fluid svg text-center" alt="Bootstrap" /> 
                                    </div>
                                </Col> 
                            </Row>
                            <Row className="d-none d-lg-flex">
                                <Col xs="12" lg="2">
                                    <p className="header-text text-center mt-3">HTML5</p>
                                </Col>
                                <Col xs="12" lg="2">
                                    <p className="header-text text-center mt-3">CSS3</p>
                                </Col>
                                <Col xs="12" lg="2">
                                    <p className="header-text text-center mt-3">JavaScript</p>
                                </Col>
                                <Col xs="12" lg="2">
                                    <p className="header-text text-center mt-3">React JS</p>
                                </Col>
                                <Col xs="12" lg="2">
                                    <p className="header-text text-center mt-3">Bootstrap</p>
                                </Col>
                                <Col xs="12" lg="2">
                                    <p className="header-text text-center mt-3">SASS</p>
                                </Col>
                            </Row>
                        </Col>
                        
                        
                    </Row>

                    <div className="header-text mt-5">Back-End Development</div>
                    <Row className="skills-container mt-3 mb-3 pt-5 pb-2 pr-3 pl-3 ">
                        <Col xs="12">
                            <Row className="pb-3 skills">
                                <Col xs="6" md="2">
                                    <div className="skills">
                                        <img src="img/php.svg" className="img-fluid svg text-center" alt="php" />
                                    </div>
                                </Col>
                                <Col xs="6" md="2">
                                    <div className="skills">
                                        <img src="img/flask.svg" className="img-fluid svg text-center" alt="flask" />
                                    </div>
                                </Col> 
                                <Col xs="6" md="2">
                                    <div className="skills mt-3 mt-md-0">
                                        <img src="img/mysql.svg" className="img-fluid svg text-center" alt="mysql" />
                                    </div>
                                </Col> 
                                <Col xs="6" md="2">
                                    <div className="skills mt-3 mt-md-0">
                                        <img src="img/lambda.svg" className="img-fluid svg text-center" alt="lambda" />
                                    </div>
                                </Col> 
                                <Col xs="6" md="2">
                                    <div className="skills mt-3 mt-md-0">
                                        <img src="img/firebase.svg" className="img-fluid svg text-center" style={{width:"60%"}} alt="firebase" /> 
                                    </div>
                                </Col>
                                <Col xs="6" md="2">
                                    <div className="skills mt-3 mt-md-0">
                                        <img src="img/dynamodb.svg" height="80%" className="img-fluid svg text-center" style={{width:"60%"}} alt="dynamodb" /> 
                                    </div>
                                </Col> 
                            </Row>
                            <Row className="d-none d-lg-flex">
                                <Col xs="12" lg="2">
                                    <p className="header-text text-center mt-3">PHP</p>
                                </Col>
                                <Col xs="12" lg="2">
                                    <p className="header-text text-center mt-3">Flask</p>
                                </Col>
                                <Col xs="12" lg="2">
                                    <p className="header-text text-center mt-3">MySQL</p>
                                </Col>
                                <Col xs="12" lg="2">
                                    <p className="header-text text-center mt-3">AWS Lambda</p>
                                </Col>
                                <Col xs="12" lg="2">
                                    <p className="header-text text-center mt-3">Firebase</p>
                                </Col>
                                <Col xs="12" lg="2">
                                    <p className="header-text text-center mt-3">AWS DynamoDB</p>
                                </Col>
                            </Row>
                        </Col> 
                    </Row>
                </Col>
            </Row>
        </div>
    )
}