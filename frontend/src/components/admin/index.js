import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Admin = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            <h1>Admin Dashboard</h1>
            <hr />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
