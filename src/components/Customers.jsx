import { Pie } from 'react-chartjs-2';

const Customers = () => {
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

    return (
        <div className="mb-3" style={{ height: '400px' }}>
            <h2>Customers</h2>
            <Pie data={data} options={options} />
        </div>
    );
};

export default Customers;