import React from "react";
import { Link } from "react-scroll";

export default function FlowButton({name,link,type="smooth"}){
    if (type !== "smooth"){
        return(
            <a href={link} rel="noreferrer" target="_blank" className="button-links mt-4 mt-lg-0 text-center text-lg-left">
                <button className="bordered-button background-slide">
                    <span className="buttonName">{name}</span>
                </button>
            </a>
        )
    }
    return(
        <Link to={link} className="button-links mt-4 mt-lg-0 text-center text-lg-left" smooth={true}>
            <button className="bordered-button background-slide">
                <span className="buttonName">{name}</span>
            </button>
        </Link>
    )
}