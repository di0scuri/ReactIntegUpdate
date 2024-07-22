import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from "react-bootstrap"
import './Login.css'
import './Welcome.css'
import CNSCLogo from './components/CNSCLogo.png'
import { FaUserShield, FaUsers } from 'react-icons/fa';

const Login = () => (
    <Container fluid className="vh-100 m-0 p-0">
        <Row className="h-100">
            <Col md={7} className='bg-color-1'>
                <Row className='d-flex justify-content-center align-items-center text-center h-100'>

                    <div>
                        <h2>Camarines Norte State College</h2>
                        <h2>Customer Feedback System</h2>
                    </div>

                    <Col className='col-md-3 mb-5 pb-5'>
                        <Button as={Link} to='./AdminLogin' variant='outline-secondary' className='loginbtn btn btn-lg'>
                            <FaUserShield size={64} style={{ color: '#8D0E0E' }} />
                            Admin
                        </Button>
                    </Col>
                    <Col className='col-md-3 mb-5 pb-5'>
                        <Button as={Link} to='./CustomerLogin' variant='outline-secondary' className='loginbtn btn btn-lg'>
                            <FaUsers size={67} style={{ color: '#8D0E0E' }} />
                            Customer
                        </Button>
                    </Col>

                </Row>
            </Col>

            <Col md={5} className="bgclr2 d-flex justify-content-center align-items-center">
                <div>
                    <Button variant='Primary'>
                        <Image src={CNSCLogo} alt="CNSC Logo" fluid />
                    </Button>
                </div>
            </Col>
        </Row>
    </Container>
);

export default Login;