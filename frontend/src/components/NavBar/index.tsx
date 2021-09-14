import ImgDsDark from 'assets/img/ds-dark.svg';

function NavBar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <img src={ImgDsDark} alt="" width="120" height="24" />
            </div>
        </nav>
    );
}

export default NavBar;
