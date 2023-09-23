import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <form id="email-registration" action="/" method="post">
            <div className="container">
                <h1> DEV@Deakin </h1>
                <input type="email" name="email" placeholder="Search" />
                <span>Post</span>
                <Link to="/login">Login</Link>
            </div>
        </form>
    );
}

export default Header;
