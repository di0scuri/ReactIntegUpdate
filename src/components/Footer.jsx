import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaFacebook } from 'react-icons/fa';
import '../Welcome.css'

const Footer = () => {
  return (
    <footer className="bg-color-2 text-white py-3">
      <Container>
        <Row>
          <Col md={6} className="text-left">
            <p className="mb-0">
              <strong>Contact Information</strong><br />
              Camarines Norte State College, Information Technology Services Office<br />
              F. Pimentel Avenue, Daet, 4600 Camarines Norte, Philippines<br />
              Telephone No: (054) 727-2672 or 440-1199<br />
              PICRO Mobile No: 09688983078 | 09171439973<br />
              Mobile No: 09190042143<br />
              Email: <u>president@cnscedu.ph</u>
            </p>
          </Col>
          <Col md={6} className="text-right">
            <div className="d-flex flex-column align-items-end">
              <span className="mb-2">Help</span>
              <div>
                <a href="https://twitter.com" className="text-white mx-2">
                  <FaTwitter size={24} />
                </a>
                <a href="https://facebook.com" className="text-white mx-2">
                  <FaFacebook size={24} />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
