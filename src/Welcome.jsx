import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from "react-bootstrap"
import './Welcome.css'
import CNSCLogo from './components/CNSCLogo.png'

const Welcome = () => {
  return (
    <Container fluid className="vh-100 m-0 p-0">
      <Row className="h-100">
        <Col md={7} className='bg-color-1'>
          <Row className='d-flex justify-content-center align-items-center text-center h-100'>

            <div>
              Feedback Icon
              <h2>Camarines Norte State College</h2>
              <h2>Customer Feedback System</h2>
            </div>

            <div>
              <Button as={Link} to='./Login' variant="outline-secondary" className="startbtn btn btn-lg">
                Start
              </Button>
              <p>We want to hear it from you.</p>
            </div>

          </Row>
        </Col>

        <Col md={5} className="bg-color-2 d-flex justify-content-center align-items-center">
          <div>
            <Button variant='Primary'>
              <Image src={CNSCLogo} alt="CNSC Logo" fluid/>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Welcome
