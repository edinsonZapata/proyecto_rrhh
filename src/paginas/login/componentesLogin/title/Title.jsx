import React from "react";
import "./Title.css";

const Title = ({text}) => {
     
    return (
        <div className="titulo">
            <label className="tituloLabel">{text}</label> 
        </div>
    )
};

export default Title;