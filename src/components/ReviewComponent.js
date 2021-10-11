import React, { Component } from 'react';
import '../styles/styles.css';
import {Row, Col} from 'reactstrap';
import {REVIEWS} from '../shared/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

class Review extends Component{

    constructor(props){
        super(props);
        this.state = {
            currentReview :  0
        }
        this.nextReview = this.nextReview.bind(this);
        this.previousReview = this.previousReview.bind(this);
    }

    nextReview(){
        this.setState({currentReview : (this.state.currentReview + 1) % REVIEWS.length})
    }

    previousReview(){
        this.setState({currentReview : (this.state.currentReview === 0 ? REVIEWS.length - 1 : this.state.currentReview - 1)})
    }


    render(){
        let currReview = REVIEWS.filter((review) => review.id === this.state.currentReview)[0];
        return(
            <React.Fragment>
                <Row className="text-center review-text" data-aos="fade-up" data-aos-delay="50" data-aos-duration="300">
                    <Col xs="2"></Col>
                    <Col xs="8">
                        Some honest feedback by my clients and faculties!
                    </Col>
                    <Col xs="2"></Col>
                </Row>
                <Row className="mt-5">
                    <Col xs="1" />
                    <Col xs="10">
                        <div className="neumorphinner" style={{paddingTop: "20%", paddingBottom: "20%", marginLeft:"auto", marginBottom:"auto", alignSelf:"ce"}}>
                            <p className="reviews">"{currReview.review}"</p>
                            <p className="review-author">-{currReview.name}, {currReview.about}</p>
                        </div>
                    </Col>
                    <Col xs="1" />
                </Row>
                <Row className="mt-3">
                    <Col xs="3" />
                    <Col xs = "3" className="ml-auto mr-auto text-center">
                        <div className="btn review-btn" onClick={this.previousReview}><FontAwesomeIcon icon={faChevronLeft} opacity="1.0" color="#9e9e9e" /></div>
                    </Col>
                    <Col xs = "3" className="ml-auto mr-auto text-center">
                        <div className="btn review-btn" onClick={this.nextReview}><FontAwesomeIcon icon={faChevronRight} opacity="1.0" color="#9e9e9e" /></div>
                    </Col>
                    <Col xs="3" />
                </Row>
            </React.Fragment>
        );
    }
}

export default Review;