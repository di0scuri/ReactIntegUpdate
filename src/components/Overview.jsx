import { Card } from 'react-bootstrap';
import './Overview.css';

function Overview() {
    return (
        <Card className="overview-card">
            <Card.Header>Overview of Results</Card.Header>
            <Card.Body>
                <Card.Title>Insights</Card.Title>
                <Card.Text>
                    <img src="/path/to/wordcloud.png" alt="Insights" className="img-fluid" />
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Overview;