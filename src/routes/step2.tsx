import { Link } from "react-router-dom";

const Step2 = () => {
    return (
        <div style={{backgroundColor: "yellow"}}>
            <h1>Step 2</h1>
            <Link to="/step3">Move to Step 3</Link>
        </div>
    )
}

export default Step2;
