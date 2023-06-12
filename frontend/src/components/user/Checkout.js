import React, { useEffect, useRef, useState } from 'react'

const Checkout = () => {

    const calledOnce = useRef(true);
    

    const [competition, setCompetition] = useState(JSON.parse(localStorage.getItem('competition')));

    const updateCompetition = async () => {
        const response = await fetch(`http://localhost:5000/competition/update/${competition._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({paymentStatus : 'paid'})
        });
        const data = await response.json();
        console.log(data);
        setTimeout(() => {
            window.location.replace = 'http://localhost:3000/user/DisplayDetails';
        }, 5000);
    }

    useEffect(() => {
        if(calledOnce.current){
            calledOnce.current = false;
            updateCompetition();
          }
    }, [])


    

  return (
    <div>
        <div className='container'>
        <img className='w-100' alt="" />

        <h1 className='text-center display-4 fw-bold'>Thank You for the Payment!!</h1>
        <p className='text-center'>Competition will be available as soon as the Payment is Confirmed</p>
        </div>
    </div>
  )
}

export default Checkout;