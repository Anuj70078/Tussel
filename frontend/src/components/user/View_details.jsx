import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const View_details = () => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')))
    console.log(currentUser)

    // const { id } = useParams();
    const [orgData, setOrgData] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [on_competition, setOn_Competition] = useState([])
    // const [off_competition, setOff_Competition] = useState([])


    const fetchOrgData = async () => {
        setLoading(true);
        const res = await fetch('http://localhost:5000/organisation/getbyuser/' + currentUser._id)

        setLoading(false);
        console.log(res.status)

        if (res.status === 200) {
            const data = await res.json();
            console.log(data)
            setOrgData(data)
        }

    }

    // const fetchOffline = async () => {
    //     setLoading(true);
    //     const res = await fetch('http://localhost:5000/offline/getbyuser/' + currentUser._id)

    //     setLoading(false);
    //     console.log(res.status)

    //     if (res.status === 200) {
    //         const data = await res.json();
    //         console.log(data)
    //         setOff_Competition(data)
    //     }
    // }

    // const fetchOnline = async () => {
    //     setLoading(true);
    //     const res = await fetch('http://localhost:5000/online/getbyuser/' + currentUser._id)

    //     setLoading(false);
    //     console.log(res.status)

    //     if (res.status === 200) {
    //         const data = await res.json();
    //         console.log(data)
    //         setOn_Competition(data)
    //     }
    // }

    useEffect(() => {
        fetchOrgData();
        // fetchOffline();
        // fetchOnline();
    }, [])


    const displayDetails = () => {
        // if (!loading && orgData && (on_competition || off_competition)) {
        if (!loading && orgData) {

            // return (
            //     <div className="card mt-3">
            //         <div className="card-body">
            //             <h1 className="card-title">Organisation Name : {orgData.org_name}</h1>
            //             <p className="card-text">
            //                 <b>About Organisation </b>: {orgData.org_details}
            //             </p>
            //             <p>
            //                 <b>Email : </b> {orgData.email}
            //             </p>
            //             <h4>About Competition - </h4>
            //             <p><b>Date and Time : </b>{competition.date}</p>
            //             <p><b>Description : </b>{competition.description}</p>
            //             <p><b>Rules : </b>{competition.rules}</p>
            //             <p><b>Rewards : </b>{competition.rewards}</p>
            //             <p><b>Venue : </b>{competition.venue}</p>

            //             <button type="button" className="btn btn-primary">
            //                 Button
            //             </button>
            //         </div>
            //     </div>
            // )

        } 
        else {
            return <h1>Loading...</h1>
        }
    }






    return (
        <div className='container'>

            {displayDetails()}

        </div>
    )
}

export default View_details