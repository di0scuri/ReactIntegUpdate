import { Nav, Button } from 'react-bootstrap';
import { BsFillHouseDoorFill, BsFileEarmarkText, BsGearWideConnected } from 'react-icons/bs';
import './SideNav.css'; // Ensure correct path
import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        <div className="sidenav-container">
            <div className="title">Admin</div>
            <Nav className="flex-column">
                <Nav.Item>
                    <Button as={Link} to='/Login/AdminLogin/AdminLoginPage/dashboard' variant="dark" className="button">
                        <BsFillHouseDoorFill className="icon" />
                        Dashboard
                    </Button>
                </Nav.Item>
                <Nav.Item>
                    <Button as={Link} to='/Login/AdminLogin/AdminLoginPage/print' variant="dark" className="button">
                        <BsFileEarmarkText className="icon" />
                        Print Reports
                    </Button>
                </Nav.Item>
                <Nav.Item>
                    <Button as={Link} to='/Login/AdminLogin/AdminLoginPage/settings' variant="dark" className="button">
                        <BsGearWideConnected className="icon" />
                        Settings
                    </Button>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default SideNav;
