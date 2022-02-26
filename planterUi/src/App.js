import React, { useState, useEffect } from 'react';

function App() {
  const [planters, setPlanters] = useState(false);
  const [planterLog, setPlanterLog] = useState(false);

  useEffect(() => {
    getPlanters();
    getPlanterLog();
  }, []);

  function getPlanters() {
    fetch('http://localhost:3001')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        setPlanters(data);
      });
  }

  function getPlanterLog() {
    fetch('http://localhost:3001/log')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        setPlanterLog(data);
      });
  }

  return (
    <div>
      <h1>Planter Info</h1>

      <h2>Planters</h2>
      <div>
        {planters && planters.length
          ? planters
          : 'There is no planters available'}
      </div>

      <h2>Planter Log</h2>
      <div>{planterLog ? planterLog : 'There is no logs available'}</div>
    </div>
  );
}
export default App;
