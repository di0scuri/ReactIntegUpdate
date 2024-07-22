import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { Card, Button } from 'react-bootstrap';
import './QuantitativeResult.css';
import axios from 'axios';

const QuantitativeResult = () => {
    const [data, setData] = useState(null);
    const [chartType, setChartType] = useState('bar');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/fetch_feedback.php');

                const results = response.data;
                if (results) {
                    const rate1Total = parseInt(results.rate1);
                    const rate2Total = parseInt(results.rate2);
                    const rate3Total = parseInt(results.rate3);
                    const rate4Total = parseInt(results.rate4);
                    const rate5Total = parseInt(results.rate5);
                    const rowCount = parseInt(results.row_count);

                    console.log(rate1Total)

                    const totalResponses = rowCount * 5;
                    const percentages = [
                        (rate1Total / totalResponses) * 100,
                        (rate2Total / totalResponses) * 100,
                        (rate3Total / totalResponses) * 100,
                        (rate4Total / totalResponses) * 100,
                        (rate5Total / totalResponses) * 100,
                    ];

                    const getColor = (percentage) => {
                        if (percentage >= 0 && percentage <= 20) return 'red';
                        if (percentage > 20 && percentage <= 40) return 'orange';
                        if (percentage > 40 && percentage <= 60) return 'yellow';
                        if (percentage > 60 && percentage <= 80) return 'yellowgreen';
                        if (percentage > 80 && percentage <= 100) return 'green';
                    };

                    setData({
                        labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
                        datasets: [
                            {
                                label: 'Client Responses',
                                data: [rate1Total, rate2Total, rate3Total, rate4Total, rate5Total],
                                backgroundColor: percentages.map(percentage => getColor(percentage)),
                                borderColor: 'black',
                                borderWidth: 1,
                                fill: false
                            },
                        ],
                    });
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const options = {
        maintainAspectRatio: false,
    };

    return (
        <Card>
            <Card.Header>Quantitative Result</Card.Header>
            <Card.Body>
                <h2>Quantitative Result</h2>
                <div className="legend mb-3">
                    <div><span style={{ backgroundColor: 'red', padding: '5px', color: 'white' }}></span> Very Dissatisfied</div>
                    <div><span style={{ backgroundColor: 'orange', padding: '5px', color: 'black' }}></span> Dissatisfied</div>
                    <div><span style={{ backgroundColor: 'yellow', padding: '5px', color: 'black' }}></span> Neutral</div>
                    <div><span style={{ backgroundColor: 'yellowgreen', padding: '5px', color: 'black' }}></span> Satisfied</div>
                    <div><span style={{ backgroundColor: 'green', padding: '5px', color: 'white' }}></span> Very Satisfied</div>
                </div>
                <Button variant="primary" onClick={() => setChartType(chartType === 'bar' ? 'line' : 'bar')}>
                    Switch to {chartType === 'bar' ? 'Line' : 'Bar'} Chart
                </Button>
                <div style={{ height: '400px', marginTop: '20px' }}>
                    {data ? (
                        chartType === 'bar' ? <Bar data={data} options={options} /> : <Line data={data} options={options} />
                    ) : 'Loading...'}
                </div>
            </Card.Body>
        </Card>
    );
};

export default QuantitativeResult;
