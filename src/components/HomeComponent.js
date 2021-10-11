import React, { Component } from 'react';
import WorksComponent from './WorksComponent';
import '../styles/styles.css';
import HeaderComponent from './HeaderComponent';
import ContactReviewComponent from './ContactReviewComponent';

class HomeComponent extends Component{

    render(){
            return(
                <React.Fragment>
                <HeaderComponent />
                <WorksComponent />
                <ContactReviewComponent />
                </React.Fragment>
            );
        }
    }


export default HomeComponent;