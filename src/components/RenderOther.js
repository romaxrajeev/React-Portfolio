import React from 'react';
import '../styles/styles.css';

function RenderOther({work}){
    return(
            <div className="mt-5 other-works" id={work.id}>
                <li>
                    <h2><img src={work.image} className="img-fluid work-image text-center" height="300px" width="300px" alt={work.name} /></h2>
                    <div className="details">
                        <div className="other-title">{work.name}</div>
                        <div className="other-desc">{work.desc}</div>
                    </div>
                </li>
            </div>
    );
}

export default RenderOther;