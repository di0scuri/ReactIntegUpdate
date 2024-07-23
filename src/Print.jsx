import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { MdPrint } from 'react-icons/md';
import './Print.css'

const Print = () => {
  return (
      <Container fluid className=" mt-n5">
        <Row md={8} className="text-left gy-2">
          <h1>Print Reports</h1>
          <Col md={12}>
            <Button variant="dark" className=" btn-custom">
              Print Overall
            </Button>
          </Col>
          <Col>
            <Button variant="dark" className=" btn-custom">
              Print Specific Department
            </Button>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <Card className="text-center card-custom">
              <Card.Body>
                <Card.Title>Print Overall Result</Card.Title>
                <Button variant="secondary" className="mt-3 btn-print">
                  <MdPrint size={36} />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>  

  );
};

export default Print;
