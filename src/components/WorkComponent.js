import React from 'react';
import '../styles/styles.css';
import {Row, Col} from 'reactstrap';

function RenderWork({work}){
    console.log(work);
    return(
            <div className="neumorphism-o works mt-5" id={work.id}>
            <li>
                <h2><img src={work.image} className="img-fluid m-auto work-image" height="300px" width="300px" alt={work.name} /></h2>
                <div className="details">
                    <div className="title">{work.name}</div>
                    <div className="desc">{work.desc}</div>
                </div>
            </li>
            </div>
    );
}

function assignColumns(works){
    let col1 = [];
    let col2 = [];
    let col3 = [];
    let col4 = [];
    let i = 0;
    for(i = 0;i<works.length;i+=4){
        col1.push(works[i]);
        col2.push(works[i+1]);
        col3.push(works[i+2]);
        col4.push(works[i+3]);
    }
    return([col1,col2,col3,col4]);
}

function WorkComponent(props){

    const order = assignColumns(props.category);
    const Col1 = order[0].map((work) => {
        if(work !== undefined)
        return(<RenderWork work={work} />);
        return("");
    });
    const Col2 = order[1].map((work) => {
        if(work !== undefined)
        return(<RenderWork work={work} />);
        return("");
    });
    const Col3 = order[2].map((work) => {
        if(work !== undefined)
        return(<RenderWork work={work} />);
        return("");
    });
    const Col4 = order[3].map((work) => {
        if(work !== undefined)
        return(<RenderWork work={work} />);
        return("");
    });
    return(
        <React.Fragment>
            <Row className="mt-5 d-flex" data-aos="fade-up" data-aos-delay="50" data-aos-duration="300">
               <Col xs="12">
                   <div className="header-text" style={{marginTop: "2%"}}>{props.title}</div>
               </Col>
            </Row>
            <Row className="mt-5" data-aos="fade-up" style={{marginBottom: "40%"}}>
               <Col xs="12" md="3">
                   <ul id="works-accordion">
                       {Col1}
                   </ul>
               </Col>
               <Col xs="12" md="3">
                   <ul id="works-accordion">
                       {Col2}
                   </ul>
               </Col>
               <Col xs="12" md="3">
                   <ul id="works-accordion">
                       {Col3}
                   </ul>
               </Col>
               <Col xs="12" md="3">
                   <ul id="works-accordion">
                       {Col4}
                   </ul>
               </Col>
            </Row>
        </React.Fragment>
    );
}

export default WorkComponent;