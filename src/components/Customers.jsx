import React, { useRef, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const Customers = () => {
    const chartRef = useRef(null);

    const data = {
        labels: ['Students', 'Employees', 'Others'],
        datasets: [
            {
                data: [60, 30, 10],
                backgroundColor: ['green', 'blue', 'gray'],
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
    };

    useEffect(() => {
        const chartInstance = chartRef.current;
        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, []);

    return (
        <div className="mb-3" style={{ height: '400px' }}>
            <h2>Customers</h2>
            <Pie ref={chartRef} data={data} options={options} />
        </div>
    );
};

export default Customers;
