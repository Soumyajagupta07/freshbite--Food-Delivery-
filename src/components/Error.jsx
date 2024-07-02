import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import './../App.css';

const Error = () => {
    const err = useRouteError();
    return (
        <div className="error_page">
            <div className="error-content">
                <h1>404</h1>
                <h2>Oh no! The page you're looking for can't be found.</h2>
                <p>It seems like the page you're trying to reach doesn't exist or has been moved. Don't worry, we've got plenty of delicious options for you to explore.</p>
                <Link to="/" className="error-link">Go to Home</Link>
                {err && <h3>{err.status}:{err.statusText}</h3>}
            </div>
            <div className="error-image">
                {/* <img src="https://img.freepik.com/premium-vector/oops-ouch-colored-comic-text-collection-sound-effects-pop-art-style-vector-speech-bubble_182541-807.jpg" alt="Food Illustration" /> */}
            </div>
        </div>
    );
}

export default Error;
