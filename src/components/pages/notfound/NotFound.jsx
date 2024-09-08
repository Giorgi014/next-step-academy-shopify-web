import { Link } from "react-router-dom";

function NotFound() {
    return ( 
        <div>
            <h1>404 Not Found</h1>
            <p><Link to={"/"}>Back Home</Link></p>
        </div>
     );
}

export default NotFound;