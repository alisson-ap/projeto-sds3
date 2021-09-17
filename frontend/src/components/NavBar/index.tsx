import ImgDsDark from 'assets/img/ds-dark.svg';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link to="/">
                    <img src={ImgDsDark} alt="" width="120" height="24" />
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;
