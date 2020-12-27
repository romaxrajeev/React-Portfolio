import React from 'react';
import '../styles/styles.css';
import ImageComponent from './ImageComponent'

function NeumorphismOuter(props) {
    if(props.text == undefined){
        return(
            <div className="panel" style={{height: props.height,width: props.width, display: props.display}}>
                <ImageComponent imgWidth={props.imgWidth} imgHeight={props.imgHeight} src={props.src} alt={props.alt} />
            </div>        
        );
    }
    else{
        return(
            <div className="card panel" style={{height: props.height,width: props.width}}>
                <div className="card-img-top">
                    <img src={props.src} width={props.imgWidth} height={props.imgHeight} alt={props.alt} className="img-fluid" style={{margin: "auto", backgroundClip: "border-box"}} />
                </div>
                <div className="card-body text-center">
                    <p className="works-text">{props.text}</p>
                </div>
            </div>        
        );
    }
}

export default NeumorphismOuter;