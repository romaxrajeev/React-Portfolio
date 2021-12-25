import React, { Component } from 'react';
import '../styles/styles.css';
import {Row, Col} from 'reactstrap';
import RenderOther from './RenderOther';


export default class Accordion extends Component{

    assignColumns(works){
        let col1 = [];
        let col2 = [];
        let col3 = [];
        let col4 = [];
        let i = 0;
        for(i = 0;i < works.length;i += 4){
            col1.push(works[i]);
            col2.push(works[i+1]);
            col3.push(works[i+2]);
            col4.push(works[i+3]);
        }
        return([col1,col2,col3,col4]);
    }

    render(){
        const order = this.assignColumns(this.props.category);
        const Col1 = order[0].map((work) => {
            if(work !== undefined)
            return(<RenderOther work={work} key={work.id} />);
            return("");
        });
        const Col2 = order[1].map((work) => {
            if(work !== undefined)
            return(<RenderOther work={work} key={work.id} />);
            return("");
        });
        const Col3 = order[2].map((work) => {
            if(work !== undefined)
            return(<RenderOther work={work} key={work.id} />);
            return("");
        });
        const Col4 = order[3].map((work) => {
            if(work !== undefined)
            return(<RenderOther work={work} key={work.id} />);
            return("");
        });
        return(
            <React.Fragment>
                <Row className="mb-5">
                   <Col xs="12" sm="6" md="3">

                       <ul id="works-accordion">
                           {Col1}
                       </ul>
                   </Col>
                   <Col xs="12" sm="6" md="3">
                       <ul id="works-accordion">
                           {Col2}
                       </ul>
                   </Col>
                   <Col xs="12" sm="6" md="3">
                       <ul id="works-accordion">
                           {Col3}
                       </ul>
                   </Col>
                   <Col xs="12" sm="6" md="3">
                       <ul id="works-accordion">
                           {Col4}
                       </ul>
                   </Col>
                </Row>
            </React.Fragment>
        );
        }
    }