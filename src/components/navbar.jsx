import './navbar.css'
import { Link} from 'react-scroll'

const Navbar = () => {
    return (
        <>
            <div className="nav-container">
                <div className="nav-1">
                <Link to="test4" spy={true} smooth={true} offset={50} duration={500} >
                    <p>About</p>
                    </Link>
                    <Link to="test1" spy={true} smooth={true} offset={50} duration={500} >

                        <p>Skills</p>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;