// src/components/ResearchSummary.js
import React from 'react';
import Chart1 from '../images/Chart1.png';
import Chart2 from '../images/Chart2.png';
import Chart3 from '../images/Chart3.png';
import Chart5 from '../images/Chart5.png';
import Chart6 from '../images/Chart6.png';
import Chart7 from '../images/Chart7.png';
import Chart8 from '../images/Chart8.png';
const responses = {
  userExperience:
    "Most users find it quick to learn, but some take over an hour. Favorite features include controlling lights, cameras, and speakers. Common issues include connectivity, incorrect commands, and device malfunctions. Confidence varies; many forget easily but some retain knowledge for a week.",
  satisfactionRatings: ['60% rated 3', '40% rated 2'],
  issuesEncountered: ['Incorrect commands and Wi-Fi disconnects.', 'Device not picking up commands.', 'Internet issues and slow responses.'],
  additionalFeedback: ['Minimally experienced users.', 'No additional feedback.'],
};

const ResearchSummary = () => (
  <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
    <h2>Research Summary</h2>
    <h3>User Experience & Features</h3>
    <p>{responses.userExperience}</p>

    <h3>Satisfaction Ratings</h3>
    <ul>
      {responses.satisfactionRatings.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>

    <h3>Common Issues</h3>
    <ul>
      {responses.issuesEncountered.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>

    <h3>Additional Feedback</h3>
    <ul>
      {responses.additionalFeedback.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default ResearchSummary;