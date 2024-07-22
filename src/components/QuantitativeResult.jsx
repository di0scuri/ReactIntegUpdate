import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { Card, Button } from 'react-bootstrap';
import './QuantitativeResult.css';
import axios from 'axios';

const QuantitativeResult = ({ acadyearID, semesterID, departmentID }) => {
    const [data, setData] = useState(null);
    const [chartType, setChartType] = useState('bar');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/fetch_feedback.php', {
                    params: { acadyearID, semesterID, departmentID }
                });

                const results = response.data;
                const totalRespondents = results.length;

                if (totalRespondents > 0) {
                    const q1Total = results.reduce((acc, curr) => acc + curr.q1, 0);
                    const q2Total = results.reduce((acc, curr) => acc + curr.q2, 0);
                    const q3Total = results.reduce((acc, curr) => acc + curr.q3, 0);
                    const q4Total = results.reduce((acc, curr) => acc + curr.q4, 0);
                    const q5Total = results.reduce((acc, curr) => acc + curr.q5, 0);

                    const percentages = [
                        (q1Total / (totalRespondents * 5)) * 100,
                        (q2Total / (totalRespondents * 5)) * 100,
                        (q3Total / (totalRespondents * 5)) * 100,
                        (q4Total / (totalRespondents * 5)) * 100,
                        (q5Total / (totalRespondents * 5)) * 100
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
                                data: [q1Total, q2Total, q3Total, q4Total, q5Total],
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
    }, [acadyearID, semesterID, departmentID]);

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
