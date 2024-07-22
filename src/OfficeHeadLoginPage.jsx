import { useState } from 'react';
import { FaEye, FaEyeSlash, FaUsers } from 'react-icons/fa';
import { Container, Form, Button, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OfficeHeadLoginPage = () => {
  const [departmentacr, setDepartmentacr] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/loginHead.php', {
        departmentacr,
        password,
      });

      if (response.data.success) {
        // Redirect to OfficeHeadDashboard
        navigate('/Login/AdminLogin/OfficeHeadLoginPage/OfficeHeadDashboard');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center m-5" style={{ backgroundColor: '#f0f0f0' }}>
      <div className="text-center mb-4">
        <FaUsers size={67} style={{ color: '#8D0E0E' }} />
        <h1 className="mt-2">OFFICE HEAD</h1>
      </div>
      <Form onSubmit={handleLogin} className="bg-light p-4 rounded shadow" style={{ width: '100%', maxWidth: '450px', border: '1px solid #1d1d1d' }}>
        <Form.Group className="mb-3" controlId="departmentacr">
          <Form.Label>Department Acronym</Form.Label>
          <Form.Control
            type="text"
            value={departmentacr}
            onChange={(e) => setDepartmentacr(e.target.value)}
            required
            style={{ marginLeft: '10px' }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ marginLeft: '10px' }}
            />
            <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </InputGroup>
        </Form.Group>
        <Button variant="dark" type="submit" className="w-100 mb-3 bg-color-2">Proceed</Button>
      </Form>
      <Button as={Link} to='/login/AdminLogin' variant="link" className="text-dark">Back</Button>
    </Container>
  );
};

export default OfficeHeadLoginPage;
