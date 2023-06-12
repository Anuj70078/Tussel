import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import app_config from '../../config';

const CompetitionDetails = () => {
  const { id } = useParams();

  const { apiUrl } = app_config;

  const navigate = useNavigate();

  const [selImg, setselImg] = useState('');

  const [paperMode, setPaperMode] = useState('file');

  const [contentText, setContentText] = useState('');

  const [selFile, setSelFile] = useState('');

  const getCompDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5000/competition/getbyid/${id}`);
      const jsonData = await response.json();
      console.log(jsonData);
      setCompData(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const updatePaper = async () => {
    console.log(contentText);
    if (paperMode === 'file') {
      await updateCompDataFile();
    } else {
      await updateCompDataContent();
    }
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    setSelFile(file);
    fd.append('myfile', file);
    fetch(apiUrl + '/util/uploadfile', {
      method: 'POST',
      body: fd
    }).then((res) => {
      if (res.status === 200) {
        console.log('file uploaded');
      }
    });
  };
  const uploadImage = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    setselImg(file);
    fd.append('myfile', file);
    fetch(apiUrl + '/util/uploadfile', {
      method: 'POST',
      body: fd
    }).then((res) => {
      if (res.status === 200) {
        console.log('file uploaded');
      }
    });
  };

  const displayPaper = () => {
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

  const updateCompDataFile = async () => {
    const res = await fetch('http://localhost:5000/competition/updateComp_data/' + id, {
      method: 'PUT',
      body: JSON.stringify({ paperMode: paperMode, paper: selFile.name }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(res.status);

    if (res.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Data Updated Successfully'
      });
      //   navigate('/user/displayDetails');
    }
  };
  const updateCompDataContent = async () => {
    const res = await fetch('http://localhost:5000/competition/updateComp_data/' + id, {
      method: 'PUT',
      body: JSON.stringify({ paperMode: paperMode, paper: contentText }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(res.status);

    if (res.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Data Updated Successfully'
      });
      //   navigate('/user/displayDetails');
    }
  };

  const [compData, setCompData] = useState(null);

  useEffect(() => {
    getCompDetails();
  }, []);

  const resultForm = useFormik({
    initialValues: {
      name: '',
      image: ''
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await fetch('http://localhost:5000/result/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: values.name,
            img: selImg.name,
            competition: id,
            createdAt: new Date()
          })
        });
        console.log(response.status);
        if (response.status === 200) {
          alert('Result Set Successfully');
        }
      } catch (err) {
        console.error(err.message);
      }
    }
  });

  return (
    <div>
      <div className="container">
        <h3> Set Competition Result</h3>
        <hr />

        <div className="card">
          <div className="card-body">
            <form onSubmit={resultForm.handleSubmit}>
              <label>Name</label>
              <input className="form-control" id="name" onChange={resultForm.handleChange} value={resultForm.values.name} />

              <label>Image</label>
              <input className="form-control"onChange={uploadImage} type='file' />

              <button className="btn btn-primary mt-5">Submit</button>
            </form>
          </div>
        </div>
        <div className="card mt-4">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h1 className="text-center">Update Papers</h1>
                <hr />
                <input
                  type="radio"
                  name="mode"
                  checked={paperMode === 'file'}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setPaperMode('file');
                    }
                  }}
                />{' '}
                <label className="fw-bold"> Upload File</label>
                <br />
                <input
                  type="radio"
                  name="mode"
                  checked={paperMode === 'content'}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setPaperMode('content');
                    }
                  }}
                />{' '}
                <label className="fw-bold">Upload Content</label>
                <br />
                <br />
                {paperMode === 'file' ? (
                  <>
                    <label className="btn btn-dark" htmlFor="paper">
                      {' '}
                      <i class="fas fa-upload"></i> Upload Paper File{' '}
                    </label>
                    <input type="file" onChange={uploadFile} id="paper" className='form-control' />
                  </>
                ) : (
                  <>
                    <label>Provide Paper Content</label>
                    <textarea className="form-control" rows={5} onChange={(e) => setContentText(e.target.value)} value={contentText}></textarea>
                  </>
                )}
                <button className="btn btn-primary mt-4" onClick={updatePaper}>
                  Update Competition
                </button>
              </div>
              <div className="col-md-6">{displayPaper()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionDetails;
