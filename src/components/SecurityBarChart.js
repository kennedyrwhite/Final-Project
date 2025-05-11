// src/components/SecurityBarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const SecurityBarChart = () => {
  const data = {
    labels: ['Vulnerabilities', 'Incidents', 'Threats'],
    datasets: [
      {
        label: 'Security Metrics',
        data: [5, 2, 7],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto' }}>
      <h3>Security Bar Chart</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SecurityBarChart;