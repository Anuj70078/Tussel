// import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/main/Home';
import Navbar from './components/main/Navbar';
import SignUp from './components/main/SignUp';
import SignIn from './components/main/SignIn';
import ForgetPswd from './components/main/ForgetPswd';
import Feedback from './components/main/Feedback';
import UserProvider from './context/UserProvider';
import { useState } from 'react';
import DisplayDetails from './components/main/DisplayDetails';
import Main from './components/main';
import View_details from './components/user/View_details';
import Organisation_Pro from './components/user/Organisation_Pro';
import CompetitionEntry from './components/user/CompetitionEntry';
import UpdateComp_data from './components/user/UpdateComp_data';
import User from './components/user';
import UserAuth from './auth/UserAuth';







function App() {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  return (
    <BrowserRouter>
      <UserProvider currentUser={currentUser}>
        <Routes>
          <Route element={<Navigate to='/homepage' />} path='/' />
          <Route element={<Main />}>
            <Route element={<SignUp />} path='signup' />
            <Route element={<Home />} path='homepage' />
            <Route element={<SignIn />} path='signin' />
            <Route element={<ForgetPswd />} path='forgetpswd' />
            
          </Route>

          <Route element={<UserAuth><User /></UserAuth>} path='user'>
            <Route element={<DisplayDetails />} path='displayDetails' />
            <Route element={<Organisation_Pro />} path='organisationPro' />
            <Route element={<View_details />} path='view_details' />
            <Route element={<CompetitionEntry />} path='competitionEntry' />
            <Route element={<UpdateComp_data />} path='updateComp_data/:compId' />
            <Route element={<Feedback />} path='feedback' />
          </Route>



        </Routes>
      </UserProvider>

    </BrowserRouter >
  );
}

export default App;
