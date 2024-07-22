import { useState } from 'react';
import { Navbar, Nav, Dropdown, Container } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import Logo from '../components/CNSCLogo.png';
import AdminLoginPage from '../AdminLoginPage';
import CustomerLoginPage from '../CustomerLoginPage';
import OfficeHeadLoginPage from '../OfficeHeadLoginPage';
import '../Welcome.css'
import { Link } from 'react-router-dom';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Administrator');

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleRoleChange = (role) => {
    console.log('Selected Role:', role);
    setSelectedRole(role);
    setShowDropdown(false);
  };

  const renderLoginPage = () => {
    switch (selectedRole) {
      case 'Administrator':
        return <AdminLoginPage />;
      case 'Customer':
        return <CustomerLoginPage />;
      case 'Office Head':
        return <OfficeHeadLoginPage />;
      default:
        return null;
    }
  };

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
              <Dropdown show={showDropdown} onToggle={toggleDropdown}>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  {selectedRole}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to='/Login/AdminLogin/AdminLoginPage' onClick={() => handleRoleChange('Administrator')}>
                    Administrator
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to='/Login/AdminLogin/CustomerLoginPage' onClick={() => handleRoleChange('Customer')}>
                    Customer
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to='/Login/AdminLogin/OfficeHeadLoginPage' onClick={() => handleRoleChange('Office Head')}>
                    Office Head
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container style={{ paddingTop: '80px' }}>
        {selectedRole !== null && renderLoginPage()}
      </Container>
    </>
  );
};

export default Header;
