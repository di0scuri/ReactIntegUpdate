import React, { useRef, useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

// Register necessary Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const Customers = () => {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({
        labels: ['Students', 'Employees', 'Others'],
        datasets: [
            {
                data: [0, 0, 0],
                backgroundColor: ['green', 'blue', 'gray'],
            },
        ],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/fetch_client_data.php');
                const data = response.data;

                const students = data.find(item => item.type === 'student')?.count || 0;
                const employees = data.find(item => item.type === 'employee')?.count || 0;
                const others = data.find(item => item.type === 'others')?.count || 0;

                setChartData({
                    labels: ['Students', 'Employees', 'Others'],
                    datasets: [
                        {
                            data: [students, employees, others],
                            backgroundColor: ['green', 'blue', 'gray'],
                        },
                    ],
                });
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();

        const chartInstance = chartRef.current;
        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, []);

    const options = {
        maintainAspectRatio: false,
    };

    return (
        <div className="mb-3" style={{ height: '400px' }}>
            <h2>Customers</h2>
            <Pie ref={chartRef} data={chartData} options={options} />
        </div>
    );
};

export default Customers;
