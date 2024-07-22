import { Button, Nav } from 'react-bootstrap';
import { BsFileEarmarkText, BsFillHouseDoorFill, BsGearWideConnected } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './SideNav.css'; // Ensure correct path

const SideNav = () => {
    return (
        <div className="sidenav-container bgclr2">
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
