import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CompetitionDetails = () => {

    const { id } = useParams();

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

    const [compData, setCompData] = useState(null);

    useEffect(() => {
      getCompDetails();
    }, []);

    const resultForm = useFormik({
        initialValues: {
            name: '',
            image : ''
        },
        onSubmit: async (values) => {
            console.log(values);
            try {
                const response = await fetch('http://localhost:5000/result/add', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        data: values,
                        competition: id,
                        createdAt: new Date()
                    }),
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
        <div className='container'>
            <h3> Set Competition Result</h3>
            <hr />
            
            <div className='card'>
                <div className='card-body'>
                    <form onSubmit={resultForm.handleSubmit}>
                        <label>Name</label>
                        <input className='form-control' id="name" onChange={resultForm.handleChange} value={resultForm.values.name} />

                        <label>Image</label>
                        <input className='form-control' id="image" onChange={resultForm.handleChange} value={resultForm.values.image} />

                        <button className='btn btn-primary mt-5'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CompetitionDetails