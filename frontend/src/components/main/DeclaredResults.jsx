import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DeclaredResults = () => {
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    const res = await fetch('http://localhost:5000/result/getall');

    console.log(res.status);

    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setResults(data);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const displayResults = () => {
    return (
      <div className="container">
        <h3>Results</h3>
        <hr />
        {results.map((result) => {
          return (
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <h5 className="card-title">{result.competition.description}</h5>
                  </div>
                  <div className="col-md-6">
                    <h5 className="card-title">{result.data.name}</h5>
                    <p className="card-text">{result.data.image}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <div className="container">
        <h1>Competition Results</h1>
        <hr />

        {displayResults()}
      </div>
    </div>
  );
};

export default DeclaredResults;
