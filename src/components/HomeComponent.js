import React from 'react';
import HeaderComponent from './HeaderComponent';
import WorksComponent from './WorksComponent';
import ContactReviewComponent from './ContactReviewComponent';

function HomeComponent(){
    return(
        <React.Fragment>
        <HeaderComponent />
        <WorksComponent />
        <ContactReviewComponent />
        </React.Fragment>
    )
}

export default HomeComponent;