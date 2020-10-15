import React from "react";
import "./Label.css"

const Label = ({text}) => {
    return (
        <div>
            <label className="label-inicio" >{text}</label>
        </div>
    )
};

export default Label;