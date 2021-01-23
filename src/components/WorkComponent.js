import React from 'react';
import '../styles/styles.css';
import {Row, Col} from 'reactstrap';

function RenderWork({work}){
    return(
        <Col xs="6" md="3" className="align-content-center mt-5">
            <div className="neumorphism-o works">
                <img src={work.image} className="img-fluid m-auto work-image" height="250px" width="250px" alt={work.name} />
                <div className="details">
                    <div className="title">{work.name}</div>
                    <div className="desc">{work.desc}</div>
                </div>
            </div>
        </Col>
    );
}

function WorkComponent(props){
    const Works = props.category.map((work) => {
        return(<RenderWork work={work} />);
    });
    return(
        <React.Fragment>
            <Row className="mt-5 d-flex" data-aos="fade-up" data-aos-delay="50" data-aos-duration="300">
               <Col xs="12">
                   <div className="header-text" style={{marginTop: "2%"}}>{props.title}</div>
               </Col>
            </Row>
            <Row className="mt-5" data-aos="fade-up">
               {Works}
            </Row>
        </React.Fragment>
    );
}

export default WorkComponent;