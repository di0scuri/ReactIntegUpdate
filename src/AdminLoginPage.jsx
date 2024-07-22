import { useState } from 'react';
import { FaUserShield, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Container, Form, Button, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/loginVPRE.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
  
    const responseText = await response.text();
    console.log(responseText); // Log the response text
  
    try {
      const data = JSON.parse(responseText);
      if (data.success) {
        localStorage.setItem('vpreID', data.user.vpreID);
        localStorage.setItem('username', data.user.username);
        localStorage.setItem('user_level', 'admin'); // Set user level to admin by default
        navigate('/Login/AdminLogin/AdminLoginPage/dashboard');
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Error parsing JSON:', error);
      setError('An unexpected error occurred. Please try again.');
    }
  };
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center m-5" style={{ backgroundColor: '#f0f0f0' }}>
      <div className="text-center mb-4">
        <FaUserShield size={64} style={{ color: '#8D0E0E' }} />
        <h1 className="mt-2">ADMINISTRATOR</h1>
      </div>
      <Form onSubmit={handleLogin} className="bg-light p-4 rounded shadow" style={{ width: '100%', maxWidth: '450px', border: '1px solid #1d1d1d' }}>
        {error && <div className="alert alert-danger">{error}</div>}
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
      <Button as={Link} to='/login/adminLogin' variant="link" className="text-dark">Back</Button>
    </Container>
  );
};

export default AdminLoginPage;
