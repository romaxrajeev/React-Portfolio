import React, {Component} from "react";
import {Row,Col} from 'reactstrap';
import '../styles/styles.css';
import HalfWorkComponent from "./HalfWorkComponent";
import {Link} from 'react-router-dom'

export default class UiUx extends Component{
    
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){
        const Posters = this.props.work.map( (other) => {
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
                <Row className="mt-5 mb-5" data-aos="fade-up" data-aos-delay="50" data-aos-duration="300">
                    <Col xs="12">
                        <div className="header-text" style={{marginTop: "2%"}}><Link to="/" style={{textDecoration:"none", color:"#9e9e9e", opacity: "1.0", fontWeight: "400", fontSize: "0.8em"}}>Home /&emsp;</Link>Poster Designs</div>
                    </Col>
                </Row>
                <Row data-aos="fade-up" data-aos-delay="150" data-aos-duration="300">
                    <Col xs="12">
                        <Row className="mb-5">
                            {Posters}
                        </Row>
                    </Col>
                </Row>
            </React.Fragment>
            )
    }
    
}