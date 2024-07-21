import './App.css';
// import SideBar from './components/sidebar/SideBar.component';
import {
  Routes, Route
} from "react-router-dom";
import HomePage from './pages/homepage/HomePage';

import Login from './pages/auth/login';
import Register from './pages/auth/register';
import ForgotPass from './pages/auth/forgotPass';



import Header from './components/header/Header';
import Content from './pages/content/Content';
import InfoClient from './pages/info-client/Info-client';
function App() {
  return (
    <div className="App max-h-dvh bg-black">
      <div className='flex gap-2' >
        <div style={{ width: "300px" }}>
          <SideBar />
        </div>
        <div className='flex-1'>
          <Header />
          <div className='overflow-y-auto' style={{ background: 'linear-gradient(to bottom, #888888, #000000 95%)', height:"620px" }}>
            <Routes>
              <Route path='/' Component={HomePage}></Route>
              <Route path='/content' Component={Content}></Route>
              <Route path='/infoclient' Component={InfoClient}></Route>

            </Routes>
          </div>
        </div>
      </div>
    </div >

  );
}

export default App;
