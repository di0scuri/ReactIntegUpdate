import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Overview from './components/Overview';
import PieChart from './components/PieChart';
import QuantitativeResult from './components/QuantitativeResult';
import './OfficeHeadDashboard.css';

const OfficeHeadDashboard = () => (
    <div className="dashboard-container">
        <Form className="form-inline-custom mb-5">
            <Row className="align-items-center justify-content-between">
                <Col md="auto">
                    <Form.Group controlId="selectAll">
                        <Row className='d-flex align-items-center'>
                            <Col md={2} className=''>
                                <Button as={Link} to="/Login/AdminLogin/OfficeHeadLoginPage/OfficeheadDashboard" variant='dark'>All</Button>
                            </Col>
                            <Col md={9} className='offset-1'>
                                <Button as={Link} to="/Login/AdminLogin/AdminLoginPage/Print" variant='dark'>Print Report</Button>
                                
                            </Col>
                        </Row>


                    </Form.Group>

                </Col>
                <Col md="auto" className="ml-auto d-flex">
                    <Row>
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
                <PieChart />
            </Col>
        </Row>
    </div>
);

export default OfficeHeadDashboard;
