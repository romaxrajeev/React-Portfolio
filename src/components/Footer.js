import React from "react";
import { Row, Col } from "reactstrap";

export default function Footer(){
    return(
            <Row className="mt-5 d-none d-lg-block">
                <Col xs="12">
                    <div className="footer mt-5">
                        &copy; 2021. Romax Rajeev. All Rights Reserved.
                    </div>
                </Col>
            </Row>
    )
}