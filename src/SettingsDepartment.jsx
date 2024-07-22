import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListGroup, Form, Button, Card, Row, Col } from 'react-bootstrap';

const DepartmentList = () => {
    const [departments, setDepartments] = useState([]);
    const [newDepartment, setNewDepartment] = useState({ departmentacr: '', departmentname: '', password: '' });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await axios.get('http://localhost:8000/getDepartments.php');
                setDepartments(response.data);
            } catch (error) {
                console.error('Error fetching department data:', error);
                setError('Failed to fetch department data');
            }
        };

        fetchDepartments();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewDepartment({ ...newDepartment, [name]: value });
    };

    const handleAddDepartment = async () => {
        try {
            const response = await axios.post('http://localhost:8000/addDepartment.php', newDepartment);
            if (response.data.success) {
                setSuccess(response.data.message);
                setDepartments([...departments, newDepartment]);
                setNewDepartment({ departmentacr: '', departmentname: '', password: '' });
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            console.error('Error adding department:', error);
            setError('Failed to add department');
        }
    };

    return (
        <div className="container">
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Add Department</Card.Title>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            {success && <p style={{ color: 'green' }}>{success}</p>}
                            <Form>
                                <Form.Group controlId="formDepartmentName">
                                    <Form.Label>Department Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter department name"
                                        name="departmentname"
                                        value={newDepartment.departmentname}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formDepartmentAcr">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter department description"
                                        name="departmentacr"
                                        value={newDepartment.departmentacr}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter password"
                                        name="password"
                                        value={newDepartment.password}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                                <Button variant="primary" onClick={handleAddDepartment}>
                                    Add Department
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8}>
                    <h2>Department List</h2>
                    <ListGroup>
                        {departments.map(department => (
                            <ListGroup.Item key={department.departmentID}>
                                {department.departmentname} ({department.departmentacr})
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </div>
    );
};

export default DepartmentList;
