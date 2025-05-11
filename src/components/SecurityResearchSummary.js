// src/components/SecurityResearchSummary.js
import React from 'react';

const securityData = {
  challenges: [
    "Uncertainty of effectiveness",
    "Weak signals/disconnections",
    "Potential lockouts or failures",
    "Difficulty setting up for non-tech-savvy users",
  ],
  issuesEncountered: [
    "False alarms",
    "Slow response",
    "Camera detection issues",
  ],
  trainingReceived: [
    "Set up by installer",
    "Guidance from manual",
    "No training",
  ],
  confidenceLevels: [
    "Very Unconfident (60%)",
    "Confident (20%)",
    "Neutral (20%)",
  ],
  suggestions: [
    "Better instructions",
    "Voice commands",
    "Offline features",
    "Simpler manuals",
  ],
  overallConfidence: "60% feel unconfident",
};

const SecurityResearchSummary = () => (
  <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
    <h2>Smart Home & Security Interface Research Summary</h2>
    
    <h3>Common Challenges</h3>
    <ul>
      {securityData.challenges.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    
    <h3>Reported Issues</h3>
    <ul>
      {securityData.issuesEncountered.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    
    <h3>Training & Guidance</h3>
    <ul>
      {securityData.trainingReceived.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    
    <h3>Confidence Levels</h3>
    <ul>
      {securityData.confidenceLevels.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    
    <h3>Suggested Improvements</h3>
    <ul>
      {securityData.suggestions.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    
    <h3>Overall Confidence</h3>
    <p>{securityData.overallConfidence}</p>
  </div>
);

export default SecurityResearchSummary;