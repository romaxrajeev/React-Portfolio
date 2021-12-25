import React from "react";
import { Row, Col } from "reactstrap";

export default function Footer(){
    return(
            <Row className="mt-5" style={{minWidth : "0", position : "relative"}}>
                <Col xs="12">
                    <div className="footer mt-5">
                        &copy; 2021. All Rights Reserved. Designed by Romax Rajeev.
                    </div>
                </Col>
            </Row>
    )
}