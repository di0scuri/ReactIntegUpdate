/* import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; */
import { Card } from 'react-bootstrap';
import './QuantitativeResult.css'

const QuantitativeResult = () => {
    /* const data = {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [
            {
                label: 'Feedback',
                data: [3, 14, 70, 83, 90],
                backgroundColor: ['red', 'orange', 'yellow', 'green', 'darkgreen'],
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
    }; */

    {/* <div className="mb-3" style={{ height: '400px' }}>
            <h2>Quantitative Result</h2>
            <Bar data={data} options={options} />
        </div> */}
    return (
        <Card>
            <Card.Header>Quantitative Result</Card.Header>
            <Card.Body>
                <img src="/path/to/bar-chart.png" alt="Quantitative Result" />
            </Card.Body>
        </Card>
    );
};

export default QuantitativeResult;