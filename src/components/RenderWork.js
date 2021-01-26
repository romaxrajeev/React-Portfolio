import React from 'react';
import '../styles/styles.css';

function RenderWork({work}){
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

export default RenderWork;