import React from 'react';

function ImageComponent(props){
    return(
        <React.Fragment>
            <img src={props.src} width={props.imgWidth} height={props.imgHeight} alt={props.alt} className="img-fluid" style={{margin: "auto"}} />
        </React.Fragment>
    );
}

export default ImageComponent;