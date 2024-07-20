import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import SideBar from './components/sidebar/SideBar.component';
import HomePage from './pages/homepage/HomePage';
import Spotify from "./pages/track/Spotify";
import './App.css';

function App() {

  useEffect(() => {
    document.title = "Spotify";
  }, []);

  return (
    <div className="App">
      {/* <SideBar /> */}
      <Routes>
        <Route path='/track' element={<Spotify />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
