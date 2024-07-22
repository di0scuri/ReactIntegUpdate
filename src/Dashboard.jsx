import { Row, Col, Form } from 'react-bootstrap';
import Overview from './components/Overview';
import QuantitativeResult from './components/QuantitativeResult';
import PieChart from './components/PieChart';
import './Dashboard.css';
import Customer from './components/Customers';

const Dashboard = () => (
  <div className="dashboard-container">
    <Form className="form-inline-custom mb-5">
      <Row className="align-items-center justify-content-between">
        <Col md="auto">
          <Form.Group controlId="selectAll">
            <Form.Check type="checkbox" label="All" />
          </Form.Group>
        </Col>
        <Col md="auto" className="ml-auto d-flex">
          <Row>
            <Col md="auto">
              <Form.Group controlId="selectOffice" className="mr-2">
                <Form.Control as="select" placeholder="Select Office">
                  <option value="Placeholder" disabled>Select Office</option>
                  <option value="Registrar Office">Registrar Office</option>
                  <option value="Admission Office">Admission Office</option>
                  <option value="Guidance Office">Guidance Office</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md="auto">
              <Form.Group controlId="selectSemester" className="mr-2">
                <Form.Control as="select" placeholder="Semester">
                  <option value="Placeholder" disabled>Semester</option>
                  <option value="First Semester">First Semester</option>
                  <option value="Second Semester">Second Semester</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md="auto">
              <Form.Group controlId="selectYear" className="mr-2">
                <Form.Control as="select" placeholder="Academic Year">
                  <option value="Placeholder" disabled>Academic Year</option>
                  <option value="2020-2021">2020-2021</option>
                  <option value="2021-2022">2021-2022</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
    <Row className="flex-grow-1">
      <Col md={12} className="mb-3">
        <Overview />
      </Col>
      <Col md={6} className="mb-3">
        <QuantitativeResult />
      </Col>
      <Col md={6} className="mb-3">
        <Customer />
      </Col>
    </Row>
  </div>
);

export default Dashboard;
