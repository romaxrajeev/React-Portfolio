import React from "react";

export default function CircleComponent(){
    return(
        <div className="circle-container">
            <div className="circle">
                <div className="inner-circle image" style={{ background : `url(img/dp.jpg) no-repeat center center`, backgroundSize:"contain"}}>
                </div>    
            </div>
        </div>   
    );
}