import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import Logo from '../components/CNSCLogo.png';
import '../Welcome.css'
import { Link } from 'react-router-dom';

const AdminHeader = () => {
    return (
        <>
            <Navbar variant="dark" fixed="top" expand="lg" className='bgclr2'>
                <Container>
                    <Navbar.Brand href="#" className="d-flex align-items-center">
                        <img
                            src={Logo}
                            alt="Logo"
                            width="50"
                            height="auto"
                            className="d-inline-block align-top"
                        />
                        <div className="d-inline-block align-top">
                            <div>Camarines Norte State College</div>
                            <div>Customer Feedback System</div>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <FaBars />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Button as={Link} to='/Login/AdminLogin/AdminLoginPage' variant="outline-primary"> Logout </Button>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default AdminHeader;
