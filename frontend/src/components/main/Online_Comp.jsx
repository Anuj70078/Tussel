import React from 'react'
import Swal from 'sweetalert2'
import { Formik } from 'formik'
import { useState } from 'react'

const Online_Comp = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')))
  console.log(currentUser)


  const onlineData = async (formdata, { resetForm }) => {

    console.log(formdata)
    // resetForm()

    const res = await fetch('http://localhost:5000/online/add', {
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
        title: 'Success',
        text: 'Data Added Successfully'
      })
      resetForm()
    }

  }




  return (
    <div>

      <div className="card w-50 mx-auto mt-3">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">ONLINE COMPETITION DESCRIPTION</h2>

          <Formik
            initialValues={{
              date: "",
              // time: "",
              description: "",
              rules: "",
              rewards: "",
              // question: ""
              user: currentUser._id
            }}
            onSubmit={onlineData}
          >
            {({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label" htmlFor="form12">
                    <b>Date</b>
                  </label>
                  <input type="datetime-local" id="form12" className="form-control" name='date' onChange={handleChange} value={values.date} />
                </div>

                {/* <div className="mb-3">
                  <label className="form-label" htmlFor="form12">
                    <b>Time</b>
                  </label>
                  <input type="time" id="form12" className="form-control" name='time' onChange={handleChange} value={values.time} />
                </div> */}


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

                {/* <div className="mb-3">
                  <label className="form-label" htmlFor="textAreaExample">
                    <b>Questions</b>
                  </label>
                  <textarea
                    className="form-control"
                    id="textAreaExample"
                    rows={5}
                    name='question'
                    onChange={handleChange}
                    value={values.question}
                  />
                </div> */}

                <button type="submit" className="btn btn-primary w-100">
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

export default Online_Comp