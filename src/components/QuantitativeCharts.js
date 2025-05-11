import React from 'react';

// Import images with exact filenames (case-sensitive)
import Chart1 from '../images/Chart1.png';
import Chart2 from '../images/Chart2.png';
import Chart3 from '../images/Chart3.png';
import Chart5 from '../images/Chart5.png';
import Chart6 from '../images/Chart6.png';
import Chart7 from '../images/Chart7.png';
import Chart8 from '../images/Chart8.png';

const ResearchCharts = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Research Charts</h2>

      {/* Chart 1 */}
      <h3>Chart 1</h3>
      <img
        src={Chart1}
        alt="Chart 1"
        style={{ width: '100%', maxWidth: '600px', marginBottom: '20px' }}
      />

      {/* Chart 2 */}
      <h3>Chart 2</h3>
      <img
        src={Chart2}
        alt="Chart 2"
        style={{ width: '100%', maxWidth: '600px', marginBottom: '20px' }}
      />

      {/* Chart 3 */}
      <h3>Chart 3</h3>
      <img
        src={Chart3}
        alt="Chart 3"
        style={{ width: '100%', maxWidth: '600px', marginBottom: '20px' }}
      />

    

      {/* Chart 5 */}
      <h3>Chart 5</h3>
      <img
        src={Chart5}
        alt="Chart 5"
        style={{ width: '100%', maxWidth: '600px', marginBottom: '20px' }}
      />

      {/* Chart 6 */}
      <h3>Chart 6</h3>
      <img
        src={Chart6}
        alt="Chart 6"
        style={{ width: '100%', maxWidth: '600px', marginBottom: '20px' }}
      />

      {/* Chart 7 */}
      <h3>Chart 7</h3>
      <img
        src={Chart7}
        alt="Chart 7"
        style={{ width: '100%', maxWidth: '600px', marginBottom: '20px' }}
      />

      {/* Chart 8 */}
      <h3>Chart 8</h3>
      <img
        src={Chart8}
        alt="Chart 8"
        style={{ width: '100%', maxWidth: '600px' }}
      />
    </div>
  );
};

export default ResearchCharts;