// src/components/FeedbackList.js
import React from 'react';

const FeedbackList = ({ feedbacks, filterTheme, setFilterTheme, toggleSort, sortDirection }) => (
  <section style={{ marginTop: '40px' }}>
    <h2>User Feedback</h2>
    {/* Filter and sort controls */}
    <div style={{ marginBottom: '10px' }}>
      <input
        type="text"
        placeholder="Filter by theme..."
        value={filterTheme}
        onChange={(e) => setFilterTheme(e.target.value)}
        style={{ padding: '8px', width: '200px' }}
      />
      <button
        onClick={toggleSort}
        style={{
          marginLeft: '10px',
          padding: '8px 12px',
          cursor: 'pointer',
        }}
      >
        Sort by User ({sortDirection === 'asc' ? 'A-Z' : 'Z-A'})
      </button>
    </div>
    {/* Feedback cards */}
    {feedbacks.length === 0 ? (
      <p>No feedbacks match the filter.</p>
    ) : (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
        }}
      >
        {feedbacks.map((fb) => (
          <div
            key={fb.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '2px 2px 8px rgba(0,0,0,0.1)',
              backgroundColor: '#fff',
            }}
          >
            <h3>{fb.user}</h3>
            <p>{fb.comment}</p>
            <small>Theme: {fb.theme}</small>
          </div>
        ))}
      </div>
    )}
  </section>
);

export default FeedbackList;