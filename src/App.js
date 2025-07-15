import './App.css';
import React, { useEffect, useState } from 'react';
import LoginButton from './components/LoginButton';
import Dashboard from './components/Dashboard'; 
import HomeNavBar from './components/HomeNavBar';
import Cassette from './images/cassette.png'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function App() {
  // const [profile, setProfile] = useState(null); 
  // const [loading, setLoading] = useState(true); 

  // useEffect( () => {
  //   fetch(`${API_BASE_URL}/auth/profile`, {
  //     method: "GET",
  //     credentials: 'include', // Send session cookie
  //   })
  //   .then ((res) => { 
  //     if (!res.ok) throw new Error("Error fetching profile"); 
  //     return res.json();
  //   })
  //   .then ((data) => { 
  //     setProfile(data);
  //   })
  //   .catch(() => {
  //     setProfile(null);
  //   })
  //   .finally(() => setLoading(false));
  // }, []);

  // if (loading) return <LoginButton />;



  return (
    <div className="App">

      <div class="header">
        <h1 class="heading" style= {{ fontStyle: 'italic bold' }}>echosphere</h1>
        < HomeNavBar />
      </div>

      <div className="content">
        <div className="notes">
          <strong>NOTES:</strong>
          <p>see what's been on repeat lately.</p>
          <p>discover your latest top tracks and artists.</p>
        </div>

        <div className="cassette">
          <img src={Cassette} alt="image of a cassette tape"/>
        </div>

        <div className="login">
          <p>connect with spotify</p>
        </div>
      </div>

        
      
      {/* <h1> */}
        {/* { profile ? <Dashboard profile={profile} /> : <p>Loading...</p>} */}
        {/* <LoginButton />  */}
      {/* </h1> */}
    </div>
  );
}

export default App;
