import React, { Component } from 'react';
import WorksComponent from './WorksComponent';
import '../styles/styles.css';
import HeaderComponent from './HeaderComponent';
import ContactReviewComponent from './ContactReviewComponent';
import ScrollToTop from 'react-scroll-to-top';
class HomeComponent extends Component{

    render(){
            return(
                <React.Fragment>
                    <ScrollToTop smooth />
                    <HeaderComponent />
                    <WorksComponent />
                    <ContactReviewComponent />
                </React.Fragment>
            );
        }
    }


export default HomeComponent;