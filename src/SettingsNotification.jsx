// src/Notification.jsx
import { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';

const Notification = () => {
  const [isFeedbackToggleOn, setFeedbackToggleOn] = useState(false);
  const [isRemindersToggleOn, setRemindersToggleOn] = useState(false);

  const handleFeedbackToggle = () => setFeedbackToggleOn(!isFeedbackToggleOn);
  const handleRemindersToggle = () => setRemindersToggleOn(!isRemindersToggleOn);

  return (
    <Container fluid>
      <Row className='mt-4'>
        <Col md={12}>
          <div>
            <Card>
              <Card.Body>
                <Card.Title>Feedback</Card.Title>
                <Card.Text>
                  These are notifications for feedback on Student/staff/faculty service satisfaction.
                </Card.Text>
                <Button variant={isFeedbackToggleOn ? "danger" : "secondary"} onClick={handleFeedbackToggle}>
                  {isFeedbackToggleOn ? <FaToggleOn /> : <FaToggleOff />}
                </Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Reminders</Card.Title>
                <Card.Text>
                  These are notifications to remind for updates that might be missed.
                </Card.Text>
                <Button variant={isRemindersToggleOn ? "danger" : "secondary"} onClick={handleRemindersToggle}>
                  {isRemindersToggleOn ? <FaToggleOn /> : <FaToggleOff />}
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Notification;
