import { Formik } from 'formik';
import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import app_config from '../../config';

const CompetitionEntry = () => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  console.log(currentUser);
  const navigate = useNavigate();

  const getPaymentLink = async (participants) => {
    if (participants <= 50 && participants > 0) {
      return 'https://buy.stripe.com/test_14kg1L1xp6bd1pe3cc';
    } else if (participants <= 100 && participants > 50) {
      return 'https://buy.stripe.com/test_14kg1L1xp6bd1pe3cc';
    } else if (participants <= 250 && participants > 100) {
      return 'https://buy.stripe.com/test_14kg1L1xp6bd1pe3cc';
    }
  };

  const { venueList } = app_config;

  const competitionData = async (formdata, { resetForm }) => {
    console.log(formdata);

    const res = await fetch('http://localhost:5000/competition/add', {
      method: 'POST',
      body: JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(res.status);

    if (res.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Data Added Successfully'
      });
      const data = await res.json();
      console.log(data);

      localStorage.setItem('competition', JSON.stringify(data));

      //   resetForm();
      window.open(getPaymentLink(formdata.participants), '_blank');
    }
  };

  return (
    <div className="competitionEntry-bg-image vh-100 competition-card-position">
      <div className="container mt-3">
        <div className="card" style={{ marginTop: '35px', borderRadius: '20px' }}>
          <div className="card-body">
            <h2 className="card-title text-center">ENTER DETAILS OF COMPETITION</h2>

            <Formik
              initialValues={{
                mode: '',
                date: '',
                description: '',
                rules: '',
                rewards: '',
                venue: '',
                requirement: '',
                participants: 0,
                user: currentUser._id,
                createdAt: new Date()
              }}
              onSubmit={competitionData}
            >
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="textAreaExample">
                        <b>Mode of Competition</b>
                      </label>
                      <div className="form-check mt-2">
                        <input className="form-check-input" type="radio" name="mode" id="offline" onChange={handleChange} value="offline" />
                        <label className="form-check-label" htmlFor="offline">
                          Offline
                        </label>
                      </div>

                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="mode" id="online" onChange={handleChange} value="online" />
                        <label className="form-check-label" htmlFor="online">
                          Online
                        </label>
                      </div>

                      <div className="my-3">
                        <label className="form-label" htmlFor="form12">
                          <b>Date and Time</b>
                        </label>
                        <input type="datetime-local" id="form12" className="form-control" name="date" onChange={handleChange} value={values.date} />
                      </div>

                      <div className="mb-3">
                        <label className="form-label" htmlFor="textAreaExample">
                          <b>Rules</b>
                        </label>
                        <textarea className="form-control" id="textAreaExample" rows={2} name="rules" onChange={handleChange} value={values.rules} />
                      </div>

                      <div className="mb-3">
                        <label className="form-label" htmlFor="textAreaExample">
                          <b>Venue</b>
                        </label>
                        <select className="form-control" name="venue" onChange={handleChange} value={values.venue}>
                          {venueList.map((venue, index) => (
                            <option value={venue}>{venue}</option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="textAreaExample">
                          <b>Number of Participants</b>
                        </label>
                        <input type="number" className="form-control" name="participants" onChange={handleChange} value={values.participants} />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="textAreaExample">
                          <b>Description</b>
                        </label>
                        <textarea className="form-control" id="textAreaExample" rows={4} name="description" onChange={handleChange} value={values.description} />
                      </div>

                      <div className="mb-3">
                        <label className="form-label" htmlFor="textAreaExample">
                          <b>Rewards</b>
                        </label>
                        <textarea className="form-control" id="textAreaExample" rows={4} name="rewards" onChange={handleChange} value={values.rewards} />
                      </div>

                      <div className="mb-3">
                        <label className="form-label" htmlFor="textAreaExample">
                          <b>Requirement</b>
                        </label>
                        <textarea className="form-control" id="textAreaExample" rows={4} name="requirement" onChange={handleChange} value={values.requirement} />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-success w-50" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionEntry;
