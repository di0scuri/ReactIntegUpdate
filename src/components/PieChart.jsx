// src/components/PieChart.jsx
import { Card } from 'react-bootstrap';
import './PieChart.css';

function PieChart() {
    return (
        <Card className="piechart-card">
            <Card.Header>Customers</Card.Header>
            <Card.Body>
                <img src="/path/to/pie-chart.png" alt="Customers" className="img-fluid" />
            </Card.Body>
        </Card>
    );
}

export default PieChart;
