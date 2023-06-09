import React from 'react'
import { Formik } from 'formik'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './SignUp.css'



const Signup = () => {

  const navigate = useNavigate();





  const addOrg = async () => {
    // console.log(formdata)
    // resetForm()

    const res = await fetch('http://localhost:5000/organisation/add', {
      method: 'POST',
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    console.log(res.status);

    if (res.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Signed Successfully'
      })
      const data = await res.json();
      return data._id;
      // navigate('/user');
    }

  }
  const userSubmit = async (formdata, { resetForm }) => {


    let OrgId = await addOrg();
    formdata.organisation = OrgId;

    console.log(formdata)
    resetForm()

    const res = await fetch('http://localhost:5000/user/add', {
      method: 'POST',
      body: JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    console.log(res.status);

    if (res.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Signed Successfully'
      })
      navigate('/main/login');
    }

  }


  return (
    <div className='signup-bg-image vh-100'>

      <div className="col-md-6 mx-auto">


        {/* <div className="">
          <img src="https://img.freepik.com/premium-vector/isometric-style-illustration-about-registration-app-login-website-online-game_529804-422.jpg" alt="" style={{ width: '80%' }} />
        </div> */}

        <div className='signup-card-position'>

          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center">CREATE ACCOUNT</h1>

              <Formik
                initialValues={{ name: "", email: "", password: "", organisation: "" }}
                onSubmit={userSubmit}
              >
                {
                  ({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>

                      <label>Name</label>
                      <input required type="text" className='form-control mb-3' name="name" onChange={handleChange} value={values.name} />

                      <label>Email</label>
                      <input required type="email" className='form-control mb-3' name="email" onChange={handleChange} value={values.email} />

                      <label>Password</label>
                      <input required type="password" className='form-control mb-3' name="password" onChange={handleChange} value={values.password} />

                      {/* <label>Organisation</label>
                      <input required type="text" className='form-control mb-3' name="organisation" onChange={handleChange} value={values.organisation} /> */}

                      <button type="submit" className="btn btn-primary w-100 mb-3">Submit</button>
                    </form>
                  )
                }
              </Formik>

              <p className='text-center'>Already have account? <Link to='/signin'>SignIn</Link></p>


            </div>
          </div>


        </div>



      </div>

    </div>
  )
}

export default Signup