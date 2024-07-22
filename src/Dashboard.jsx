import { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import Overview from './components/Overview';
import QuantitativeResult from './components/QuantitativeResult';
import './Dashboard.css';
import Customer from './components/Customers';

const Dashboard = () => {
  const [filters, setFilters] = useState({
    acadyearID: 1,
    semesterID: 1,
    departmentID: 1,
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
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
                  <Form.Control as="select" placeholder="Select Office" name="departmentID" onChange={handleFilterChange}>
                    <option value="1">Registrar Office</option>
                    <option value="2">Admission Office</option>
                    <option value="3">Guidance Office</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md="auto">
                <Form.Group controlId="selectSemester" className="mr-2">
                  <Form.Control as="select" placeholder="Semester" name="semesterID" onChange={handleFilterChange}>
                    <option value="1">First Semester</option>
                    <option value="2">Second Semester</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md="auto">
                <Form.Group controlId="selectYear" className="mr-2">
                  <Form.Control as="select" placeholder="Academic Year" name="acadyearID" onChange={handleFilterChange}>
                    <option value="1">2023-2024</option>
                    <option value="2">2024-2025</option>
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
          <QuantitativeResult 
            acadyearID={filters.acadyearID} 
            semesterID={filters.semesterID} 
            departmentID={filters.departmentID} 
          />
        </Col>
        <Col md={6} className="mb-3">
          <Customer />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
