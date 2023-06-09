import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateComp_data = () => {

    const { compId } = useParams();
    const [compData, setCompData] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const getCompDataById = async () => {
        setLoading(true);
        const res = await fetch('http://localhost:5000/competition/getbyid/' + compId)

        console.log(res.status)
        // console.log(compId)

        if (res.status === 200) {
            const data = await res.json();
            console.log(data)
            setCompData(data)
            setLoading(false);
        }
    }

    useEffect(() => {
        getCompDataById();
    }, [])

    const updateCompData = async (formdata) => {
        console.log(formdata)
        const res = await fetch('http://localhost:5000/competition/updateComp_data/' + compId, {
            method: 'PUT',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        console.log(res.status)

        if (res.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Data Updated Successfully'
            })
            navigate('/display')
        }
    }

    const showUpdateCompForm = () => {
        if (!loading && compData) {
            return (
                <div className='card mt-5'>
                    <div className="card-body">
                        <h1 className="text-center mb-3">Update your Data here</h1>

                        <Formik
                            initialValues={compData}
                            onSubmit={updateCompData}
                        >

                            {
                                ({ values, handleChange, handleSubmit }) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className="row mt-3">

                                            <div className="col-md-6">

                                                <div className="form-check mt-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="mode"
                                                        id="offline"
                                                        onChange={handleChange}
                                                        value="offline"
                                                    />
                                                    <label className="form-check-label" htmlFor="offline">
                                                        Offline
                                                    </label>
                                                </div>

                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="mode"
                                                        id="online"
                                                        onChange={handleChange}
                                                        value="online"
                                                    />
                                                    <label className="form-check-label" htmlFor="online">
                                                        Online
                                                    </label>
                                                </div>

                                                <div className="my-3">
                                                    <label className="form-label" htmlFor="form12">
                                                        <b>Date and Time</b>
                                                    </label>
                                                    <input type="datetime-local" id="form12" className="form-control" name='date' onChange={handleChange}
                                                        value={values.date} />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="textAreaExample">
                                                        <b>Rules</b>
                                                    </label>
                                                    <textarea
                                                        className="form-control"
                                                        id="textAreaExample"
                                                        rows={4}
                                                        name='rules'
                                                        onChange={handleChange}
                                                        value={values.rules}
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="textAreaExample">
                                                        <b>Venue</b>
                                                    </label>
                                                    <textarea
                                                        className="form-control"
                                                        id="textAreaExample"
                                                        rows={4}
                                                        name='venue'
                                                        onChange={handleChange}
                                                        value={values.venue}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6">

                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="textAreaExample">
                                                        <b>Description</b>
                                                    </label>
                                                    <textarea
                                                        className="form-control"
                                                        id="textAreaExample"
                                                        rows={4}
                                                        name='description'
                                                        onChange={handleChange}
                                                        value={values.description}
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="textAreaExample">
                                                        <b>Rewards</b>
                                                    </label>
                                                    <textarea
                                                        className="form-control"
                                                        id="textAreaExample"
                                                        rows={4}
                                                        name='rewards'
                                                        onChange={handleChange}
                                                        value={values.rewards}
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="textAreaExample">
                                                        <b>Requirement</b>
                                                    </label>
                                                    <textarea
                                                        className="form-control"
                                                        id="textAreaExample"
                                                        rows={4}
                                                        name='requirement'
                                                        onChange={handleChange}
                                                        value={values.requirement}
                                                    />
                                                </div>




                                            </div>





                                        </div >
                                        <div className='text-center'>
                                            <button className="btn btn-success w-50"
                                                type='submit'>Submit</button>
                                        </div>
                                    </form>
                                )
                            }

                        </Formik>

                    </div>
                </div>
            )
        }
    }









    return (
        <div className='container'>

            {showUpdateCompForm()}
        </div>
    )
}

export default UpdateComp_data