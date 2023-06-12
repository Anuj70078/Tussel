import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import app_config from '../../config';

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

                    <div className='d-flex'>
                      <h3>Competition Held on : {new Date(result.createdAt).toLocaleDateString()}</h3>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img style={{height: '200px'}} className='d-block m-auto' src={app_config.apiUrl + '/' + result.img} alt="" />
                    <h5 className="card-title text-center">{result.name}</h5>
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
