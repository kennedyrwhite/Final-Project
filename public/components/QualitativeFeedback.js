import React from 'react';
import { qualitativeData } from '../data/surveyData';

const QualitativeFeedback = () => {
  return (
    <div>
      <h2>Qualitative Themes</h2>
      {qualitativeData.map((item, index) => (
        <div key={index} style={{ border: '1px solid #ccc', margin: '1rem 0', padding: '1rem' }}>
          <p><strong>Challenge:</strong> {item.challenge}</p>
          <p><strong>Solution:</strong> {item.solution}</p>
          <p><strong>Suggestion:</strong> {item.suggestion}</p>
        </div>
      ))}
    </div>
  );
};

export default QualitativeFeedback;
