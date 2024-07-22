import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from "react-bootstrap"
import './AdminLogin.css'
import CNSCLogo from './components/CNSCLogo.png'

function AdminLogin() {
    return (
        <Container fluid className="vh-100 m-0 p-0">
            <Row className="h-100">
                <Col md={7} className='bg-color-1'>
                    <Row className='d-flex justify-content-center align-items-center text-center h-100'>

                        <div>
                            <h2>Camarines Norte State College</h2>
                            <h2>Customer Feedback System</h2>
                        </div>

                        <Col>
                            <Col className='col-md-12 mb-4'>
                                <Button as={Link} to='./AdminLoginPage' variant='outline-primary' className='VPREbtn btn'>
                                    VPRE
                                </Button>
                            </Col>
                            <Col className='col-md-12 mb-4'>
                                <Button as={Link} to='./OfficeHeadLoginPage' variant='outline-primary' className='OfficeHeadbtn btn'>
                                    Office Head
                                </Button>
                            </Col>
                            <Col className='col-md-12 mb-1'>
                                <Button as={Link} to='/Login' variant='outline-primary' className='Backbtn btn'>
                                    Back
                                </Button>
                            </Col>
                        </Col>

                    </Row>
                </Col>

                <Col md={5} className="bg-color-2 d-flex justify-content-center align-items-center">
                    <div>
                        <Button variant='Primary'>
                            <Image src={CNSCLogo} alt="CNSC Logo" fluid />
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminLogin
