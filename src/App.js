import React, { useState } from 'react';

function App() {
  const [review, setReview] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ review }),
    });
    const data = await response.json();
    setResult(data.sentiment);
  };

  return (
    <div className="App">
      <h1>Sentiment Analysis</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows="4"
          cols="50"
        />
        <br />
        <button type="submit">Analyze</button>
      </form>
      {result && <h2>Sentiment: {result}</h2>}
    </div>
  );
}

export default App;
