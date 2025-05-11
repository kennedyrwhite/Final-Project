import React from 'react';

const chartImages = [
  'chart1.png',
  'chart2.png',
  'chart3.png',
  'chart4.png',
  'chart5.png',
  'chart6.png',
  'chart7.png',
  'chart8.png',
];

const ChartGallery = () => {
  return (
    <div>
      <h2>Survey Chart Gallery</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {chartImages.map((filename, index) => (
          <div key={index}>
            <img
              src={`/chart/${filename}`}
              alt={`Chart ${index + 1}`}
              style={{ width: '100%', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
            />
            <p style={{ textAlign: 'center' }}>Chart {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartGallery;
