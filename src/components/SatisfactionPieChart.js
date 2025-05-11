// src/components/SatisfactionPieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';

const SatisfactionPieChart = () => {
  const data = {
    labels: ['Satisfied', 'Neutral', 'Unsatisfied'],
    datasets: [
      {
        label: 'Customer Satisfaction',
        data: [60, 25, 15],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h3>Satisfaction Pie Chart</h3>
      <Pie data={data} options={{ responsive: true }} />
    </div>
  );
};

export default SatisfactionPieChart;