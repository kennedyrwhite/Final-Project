import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81],
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

function MyBarChart() {
  return <Bar data={data} options={options} />;
}