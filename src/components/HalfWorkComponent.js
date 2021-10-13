import React from 'react';
import '../styles/styles.css';

export default function HalfWorkComponent({work}){
    console.log(work)
    return(
        <React.Fragment>
            <div className="neumorphism-image-container" id={work.id} style={{ backgroundImage : `url(${work.image})`, width : "400px", height : "400px" }}></div>
        </React.Fragment>
    );
}