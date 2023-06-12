import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import app_config from '../../config';

const DisplayDetails = () => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  console.log(currentUser);

  const { apiUrl } = app_config;

  const [orgData, setOrgData] = useState([]);
  const [comp, setComp] = useState([]);
  const [loading, setLoading] = useState(false);

  // Orgnisation Data

  const fetchOrgData = async () => {
    setLoading(true);
    const res = await fetch('http://localhost:5000/organisation/getbyuser/' + currentUser._id);

    setLoading(false);
    console.log(res.status);

    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setOrgData(data);
    }
  };

  // Competition Data

  const fetchCompData = async () => {
    setLoading(true);
    const res = await fetch('http://localhost:5000/competition/getbyuser/' + currentUser._id);

    setLoading(false);
    console.log(res.status);

    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setComp(data);
    }
  };

  const deleteCompData = async (id) => {
    console.log(id);
    const res = await fetch('http://localhost:5000/competition/delete/' + id, {
      method: 'DELETE'
    });

    console.log(res.status);

    if (res.status === 200) {
      fetchCompData();
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Data Deleted Successfully'
      });
    }
  };

  useEffect(() => {
    fetchOrgData();
    fetchCompData();
  }, []);

  const displayPaper = (compData) => {
    console.log(compData);
    if (compData) {
      if (compData.paperMode === 'file') {
        return (
          <>
            <img src={apiUrl + '/' + compData.paper} alt="" />
          </>
        );
      } else {
        return (
          <>
            <h3>Paper</h3>
            <p>{compData.paper}</p>
          </>
        );
      }
    }
  };

  const displayData = () => {
    if (!loading && orgData && comp) {
      return (
        <div className="">
           {comp.map((item) => (
              <div className="card mt-3">
                <div className="card-body">
                    <div className='row'>
                        <div className='col-md-6'>
                        <h1 className="card-title">Organisation Name : {item.org_name}</h1>
                  <p className="card-text">
                    <b>About Organisation </b>: {item.org_details}
                  </p>
                  <p>
                    <b>Email : </b> {item.email}
                  </p>
                  <h3>About Competition - </h3>
                  <div>
                    {comp.map((cItem) => (
                      <div>
                        <p>
                          <b>Mode : </b>
                          {cItem.mode}
                        </p>
                        <p>
                          <b>Date and Time : </b>
                          {cItem.date}
                        </p>
                        <p>
                          <b>Description : </b>
                          {cItem.description}
                        </p>
                        <p>
                          <b>Rules : </b>
                          {cItem.rules}
                        </p>
                        <p>
                          <b>Rewards : </b>
                          {cItem.rewards}
                        </p>
                        <p>
                          <b>Venue : </b>
                          {cItem.venue}
                        </p>
                        <button type="button" className="btn btn-danger" onClick={() => deleteCompData(cItem._id)}>
                          Delete
                        </button>
                        <Link to={'/user/competitiondetails/' + cItem._id}>
                          <button type="button" className="btn btn-success">
                            Update Data
                          </button>
                        </Link>
                        <hr />
                      </div>
                    ))}
                  </div>
                        </div>
                        <div className='col-md-6'>
                        {displayPaper(item)}
                        </div>
                    </div>
                  
                </div>
              </div>
            ))}
        </div>
      );
    }
  };

  return (
    <div className="container">
      {displayData()}
    </div>
  );
};

export default DisplayDetails;
