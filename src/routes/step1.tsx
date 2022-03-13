import React from "react";
import { Link } from "react-router-dom";

const Step1 = () => {
    return (
        <div style={{backgroundColor: "skyblue"}}>
            <h1>Step 1</h1>
            <Link to="/step2">Move to Step 2</Link>
        </div>
    )
}

export default Step1;
