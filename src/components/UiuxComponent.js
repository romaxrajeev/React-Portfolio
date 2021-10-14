import React, {Component} from "react";
import ExtendedWorkComponent from "./ExtendedWorkComponent";
import {Row,Col} from 'reactstrap';
import '../styles/styles.css';
import {Link} from 'react-router-dom'
import HalfWorkComponent from "./HalfWorkComponent";
import ScrollToTop from "react-scroll-to-top";

export default class UiUx extends Component{
    
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){
        const Projects = this.props.category.projects.map( (project, index) => {
            if(project !== undefined)
            return(<ExtendedWorkComponent work = {project} type={(index % 2 === 0) ? "left" : "right"} />)
            return("")

        })

        const DailyUI = this.props.category.others.map( (other) => {
            if(other !== undefined)
            return(
                        <Col xs="12" md="6" className="mt-5">
                            <HalfWorkComponent work={other} />
                        </Col>
            )
            return("") 
        })

        return(
            <React.Fragment>
                <ScrollToTop smooth />
                <Row className="mt-5 mb-5" data-aos="fade-up" data-aos-delay="50" data-aos-duration="300">
                   <Col xs="12">
                       <div className="header-text" style={{marginTop: "2%"}}><Link to="/" style={{textDecoration:"none", color:"#9e9e9e", opacity: "1.0", fontWeight: "400", fontSize: "0.8em"}}>Home /&emsp;</Link>UI/UX Projects</div>
                   </Col>
                </Row>
                <Row data-aos="fade-up" data-aos-delay="100" data-aos-duration="300">
                    <Col xs="12">
                        {Projects}
                    </Col>
                </Row>
                <Row className="mt-5 mb-3" data-aos="fade-up" data-aos-delay="100" data-aos-duration="300">
                   <Col xs="12">
                       <div className="header-text" style={{marginTop: "2%"}}>Daily UI Challenges</div>
                   </Col>
                </Row>
                <Row data-aos="fade-up" data-aos-delay="150" data-aos-duration="300">
                    <Col xs="12">
                        <Row className="mb-5">
                        {DailyUI}
                        </Row>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}
