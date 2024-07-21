import './App.css';
import SideBar from './components/sidebar/SideBar.component';
import {
  Routes, Route
} from "react-router-dom";
import HomePage from './pages/homepage/HomePage';
import Header from './components/header/Header';
import SearchPage from './pages/searchpage/SearchPage';
import Artist from './pages/artist/Artist'

import Login from './pages/auth/login';
import Register from './pages/auth/register';
import ForgotPass from './pages/auth/forgotPass';
import Track from "./pages/track/Track";
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
          <div className='overflow-y-auto' style={{ background: 'linear-gradient(to bottom, #888888, #000000 95%)', height: "620px" }}>
            <Routes>
              <Route path='/' Component={HomePage}></Route>
              <Route path='/search' Component={SearchPage}></Route>
              <Route path='/artist' Component={Artist}></Route>
              <Route path='/login' Component={Login}></Route>
              <Route path='/register' Component={Register}></Route>
              <Route path='/forgot' Component={ForgotPass}></Route>
              <Route path='/content' Component={Content}></Route>
              <Route path='/info' Component={InfoClient}></Route>
              <Route path='/track' element={<Track />} />
            </Routes>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
