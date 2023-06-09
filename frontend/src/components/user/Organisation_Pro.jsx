import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import Swal from 'sweetalert2'

const Organisation_Pro = () => {

    const [org, setOrg] = useState([])

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')))
    console.log(currentUser)

    const orgSubmit = async (formdata, { resetForm }) => {


        console.log(formdata)


        const res = await fetch('http://localhost:5000/organisation/add', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(res.status)

        if (res.status === 200) {
            Swal.fire({
                icon: 'success',
                title: "Success",
                text: "Data Added"
            })
            // resetForm()
        }
    }


    const fetchOrgData = async (id) => {
        const res = await fetch('http://localhost:5000/organisation/getbyid/' + id)

        const data = await res.json();
        console.log(data)
        setOrg(data)
    }

    // console.log(res.status)

    useEffect(() => {
        orgSubmit();
        fetchOrgData();
    }, [])







    return (
        <div>
            <div className="card w-50 mx-auto mt-2">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">ORGANISATION DETAIL</h2>
                    <Formik
                        initialValues={{ name: currentUser.name, email: currentUser.email, org_name: '', org_details: '', user: currentUser._id }}
                        onSubmit={orgSubmit}>
                        {({ values, handleChange, handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                {/* <label>Name</label>
                                <input required type="text" className='form-control mb-3' name="name" onChange={handleChange} value={values.name} /> */}

                                <div class="mb-3">
                                    <label class="form-label" for="formControlDisabled">Name</label>
                                    <input
                                        class="form-control"
                                        id="formControlDisabled"
                                        type="text"
                                        value={values.name}
                                        aria-label="disabled input example"
                                        disabled
                                    />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label" for="formControlDisabled">Email</label>
                                    <input
                                        class="form-control"
                                        id="formControlDisabled"
                                        type="text"
                                        value={values.email}
                                        aria-label="disabled input example"
                                        disabled
                                    />
                                </div>

                                {/* <label>Email</label>
                                <input required type="email" className='form-control mb-3' name="email" onChange={handleChange} value={values.email} /> */}



                                <div className="mb-2">
                                    <label className="form-label" htmlFor="form12">
                                        Organisation Name
                                    </label>
                                    <input type="text" id="form12" className="form-control" name='org_name' onChange={handleChange} value={values.org_name} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="textAreaExample">
                                        Organisation Details
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="textAreaExample"
                                        rows={4}
                                        name='org_details'
                                        onChange={handleChange}
                                        value={values.org_details}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>


                            </form>
                        )}
                    </Formik>



                </div>
            </div>

        </div>
    )
}

export default Organisation_Pro