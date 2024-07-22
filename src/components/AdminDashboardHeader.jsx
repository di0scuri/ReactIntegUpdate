import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import Logo from './CNSCLogo.png';
import '../Welcome.css'

const AdminDashboardHeader = () => {

    return (
        <>
            <Navbar variant="dark" fixed="top" expand="lg" className='bg-color-2'>
                <Container>
                    <Navbar.Brand href="#" className="d-flex align-items-center">
                        <img
                            src={Logo}
                            alt="Logo"
                            width="50"
                            height="auto"
                            className="d-inline-block align-top"
                        />
                        <div className="d-inline-block align-top ml-3">
                            <div>Camarines Norte State College</div>
                            <div>Customer Feedback System</div>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <FaBars />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Button variant="outline-light">Logout</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default AdminDashboardHeader;
