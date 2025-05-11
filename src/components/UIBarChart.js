// src/components/UIBarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const UIBarChart = () => {
  const data = {
    labels: ['Buttons', 'Menus', 'Dialogs', 'Forms'],
    datasets: [
      {
        label: 'UI Components Usage',
        data: [80, 65, 50, 70],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
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
      <h3>UI Bar Chart</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default UIBarChart;