import React, { useState } from 'react';

// Import your images
import Chart1 from '../images/Chart1.png';
import Chart2 from '../images/Chart2.png';
import Chart3 from '../images/Chart3.png';
import Chart5 from '../images/Chart5.png';
import Chart6 from '../images/Chart6.png';
import Chart7 from '../images/Chart7.png';
import Chart8 from '../images/Chart8.png';

const chartsData = [
  { id: 1, title: 'Chart 1', image: Chart1, category: 'A', date: '2023-01-01' },
  { id: 2, title: 'Chart 2', image: Chart2, category: 'B', date: '2023-02-15' },
  { id: 3, title: 'Chart 3', image: Chart3, category: 'A', date: '2023-03-10' },
  { id: 4, title: 'Chart 5', image: Chart5, category: 'C', date: '2023-01-20' },
  { id: 5, title: 'Chart 6', image: Chart6, category: 'A', date: '2023-04-05' },
  { id: 6, title: 'Chart 7', image: Chart7, category: 'C', date: '2023-02-25' },
  { id: 7, title: 'Chart 8', image: Chart8, category: 'B', date: '2023-03-30' },
];

const categories = ['All', 'A', 'B', 'C'];

const InteractiveCharts = () => {
  // Filter states
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  // Sorting states
  const [sortKey, setSortKey] = useState('title'); // 'title', 'category', 'date'
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'

  // Handle filtering
  const filteredCharts = chartsData.filter(chart => {
    const matchesCategory = categoryFilter === 'All' || chart.category === categoryFilter;
    const chartDate = new Date(chart.date);
    const matchesStartDate = !startDate || chartDate >= new Date(startDate);
    const matchesEndDate = !endDate || chartDate <= new Date(endDate);
    return matchesCategory && matchesStartDate && matchesEndDate;
  });

  // Handle sorting
  const sortedCharts = [...filteredCharts].sort((a, b) => {
    let compareA = a[sortKey];
    let compareB = b[sortKey];

    if (sortKey === 'date') {
      compareA = new Date(compareA);
      compareB = new Date(compareB);
    } else {
      compareA = compareA.toString().toLowerCase();
      compareB = compareB.toString().toLowerCase();
    }

    if (compareA > compareB) {
      return sortOrder === 'asc' ? 1 : -1;
    } else if (compareA < compareB) {
      return sortOrder === 'asc' ? -1 : 1;
    } else {
      return 0;
    }
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Interactive Charts</h2>

      {/* Filters */}
      <div style={{ marginBottom: '15px' }}>
        {/* Category filter */}
        <label style={{ marginRight: '10px' }}>Category: </label>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          style={{ marginRight: '20px' }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        {/* Date range filter */}
        <label style={{ marginRight: '10px' }}>Start Date: </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={{ marginRight: '20px' }}
        />
        <label style={{ marginRight: '10px' }}>End Date: </label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      {/* Sorting controls */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '10px' }}>Sort by: </label>
        <select
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value)}
          style={{ marginRight: '20px' }}
        >
          <option value="title">Title</option>
          <option value="category">Category</option>
          <option value="date">Date</option>
        </select>

        <button
          onClick={() => setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'))}
        >
          {sortOrder === 'asc' ? 'Sort Descending' : 'Sort Ascending'}
        </button>
      </div>

      {/* Display charts */}
      {sortedCharts.length > 0 ? (
        sortedCharts.map((chart) => (
          <div key={chart.id} style={{ marginBottom: '30px' }}>
            <h3>{chart.title}</h3>
            <img
              src={chart.image}
              alt={chart.title}
              style={{ width: '100%', maxWidth: '600px' }}
            />
          </div>
        ))
      ) : (
        <p>No charts match your filters.</p>
      )}
    </div>
  );
};

export default InteractiveCharts;