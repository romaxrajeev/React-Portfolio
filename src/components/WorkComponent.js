import React, { Component } from 'react';
import '../styles/styles.css';
import {Row, Col} from 'reactstrap';
import RenderWork from './RenderWork';
import { Link } from 'react-router-dom';

class WorkComponent extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
    }

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
    
    checkButton(button){
        if(button !== undefined)
            return(
                <a href={button.link} rel="noreferrer" target="_blank"><button className="btn my-work">{button.type}</button></a>
            );
        return("");
    }

    render(){
        if(this.props.title === "Development & UI/UX Projects"){
            const Projects = this.props.category.map((work) => {
                const Button1 = this.checkButton(work.button1)
                const Button2 = this.checkButton(work.button2)
                return(
                    <Row className="mt-5" data-aos="fade-up" data-aos-duration="300" id={work.id}>
                        <Col xs="12">
                            <div className="neumorphism-outer" id={work.id}>
                                <Row>
                                    <Col xs="12" md="3">
                                        <img src={work.image} className="img-fluid m-auto work-image" height="300px" width="300px" alt={work.name} />
                                    </Col>
                                    <Col xs="12" md="9">
                                    <div className="projectHeader mt-5 mt-md-0">
                                        {work.name}
                                    </div>
                                    <div className="projectDetails mt-3 mt-md-0">
                                        <p>{work.desc}</p>
                                        <p><b>Tech Stack:</b> {work.techStack}</p>
                                        <p style={{marginTop: "5%"}}>{Button1}       {Button2}</p>
                                    </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                );
            })
            return(
                <React.Fragment>
                    <Row className="mt-5 d-flex" data-aos="fade-up" data-aos-delay="50" data-aos-duration="300">
                        <Col xs="12">
                            <div className="header-text" style={{marginTop: "2%"}}><Link to="/" style={{textDecoration:"none", color:"#9e9e9e", opacity: "1.0", fontWeight: "400", fontSize: "0.8em"}}>Home /&emsp;</Link>{this.props.title}</div>
                        </Col>
                    </Row>
                    {Projects}
                </React.Fragment>
            );
        }
        else{
            const order = this.assignColumns(this.props.category);
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
                <Row className="mt-5" data-aos="fade-up" data-aos-delay="50" data-aos-duration="300">
                   <Col xs="12">
                       <div className="header-text" style={{marginTop: "2%"}}><Link to="/" style={{textDecoration:"none", color:"#9e9e9e", opacity: "1.0", fontWeight: "400", fontSize: "0.8em"}}>Home /&emsp;</Link>{this.props.title}</div>
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
    }
    
}

export default WorkComponent;