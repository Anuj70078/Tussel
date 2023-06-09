import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <div className='container'>
        {/* <div class="row d-flex flex-row-reverse">

        <div className="col-sm-6 col-md-6 ">1</div>
        <div className="col-sm-6 col-md-6 ">2</div>
        
      </div> */}
        <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191113185616/Best-Way-To-Start-With-Competitive-Programming-GeeksforGeeks-CP-Live-Course.png" alt="" className='w-100' />

        <div className="card mt-3">
          <div className="card-body">
            <h2 className="card-title">ORGANIZING COMPETITION IS NOW EASIER</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis illo temporibus exercitationem facilis deserunt aliquam iusto tempora, necessitatibus suscipit, vitae tempore? Corporis dolores, tempora ullam, natus repudiandae nostrum et, ratione error iure distinctio maiores ipsa deleniti voluptatem quas ut minus iusto impedit? Recusandae odit obcaecati illo voluptatum consequatur quibusdam quasi nostrum aperiam doloremque et, autem aspernatur illum perferendis maxime totam, placeat eum itaque. Autem totam repellendus mollitia, unde consequuntur maiores, doloremque ex fuga modi incidunt omnis, aliquam reprehenderit dolorum deleniti?
            </p>
            {/* <button type="button" className="btn btn-primary">
            Button
          </button> */}
          </div>
        </div>


        <div className="row my-3">

          <div className="col-sm-6 col-md-6">

            <div className="card">
              <div className="card-body">
                <h3 className="card-title"><b><i>ONLINE COMPETITION</i></b></h3>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio exercitationem, inventore necessitatibus accusamus cupiditate doloribus minus eius recusandae! Dignissimos explicabo fuga impedit facilis. Modi provident cum eius. Aut quibusdam, facilis minus nostrum odit ducimus? Suscipit ipsum id explicabo quam soluta? Quia nulla, eaque tenetur sapiente iusto quibusdam laboriosam minima rem.
                </p>
                <Link to='/organisationPro'>
                  <button type="button" className="btn btn-primary">Get Started
                  </button>
                </Link>
              </div>
            </div>


          </div>
          <div className="col-sm-6 col-md-6">

            <div className="card">
              <div className="card-body">
                <h3 className="card-title"><b><i>OFFLINE COMPETITION</i></b></h3>
                <p className="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem delectus, eligendi, expedita possimus nihil corrupti facilis quos sequi in a unde ebhsgcbvbc corporis optio numquffsafam plac fasfasfa eat cum rem dsfsafdf etretwtrt vitae debitis exercitationem similique. Consectetur nam, iure ea, quaerat sequi animi repellat totam quod quos sed asperiores molestias quibusdam, velit ullam fdsfd3rtgf aut fugit?
                </p>
                <Link to='/organisationPro'>

                  <button type="button" className="btn btn-primary">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>


          </div>
        </div>


      </div>
      <Footer />
    </div>
  )
}

export default Home