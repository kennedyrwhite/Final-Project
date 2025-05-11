// src/App.js
import React from 'react';
import Header from './components/Header';
import QuantitativeCharts from './components/QuantitativeCharts';
import QualitativeFeedback from './components/QualitativeFeedback';
import ResearchSummary from './components/ResearchSummary';
import SecurityResearchSummary from './components/SecurityResearchSummary';
import InteractiveCharts from './components/InteractiveCharts';

function App() {
  return (
    <div className="App" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <Header />
      <QuantitativeCharts />
      <QualitativeFeedback />
      <ResearchSummary /> {/* Your previous research */}
      <SecurityResearchSummary /> {/* Your new security research insights */}
      
      {/* Add your InteractiveCharts component here */}
      <InteractiveCharts />
      
    </div>
  );
}

export default App;