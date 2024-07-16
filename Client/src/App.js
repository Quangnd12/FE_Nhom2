import './App.css';
// import SideBar from './components/sidebar/SideBar.component';
import {
  Routes, Route
} from "react-router-dom";
import HomePage from './pages/homepage/HomePage';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import ForgotPass from './pages/auth/forgotPass';

function App() {
  return (
    <div className="App">
      {/* <SideBar /> */}
      <Routes>
        <Route path='/' Component={HomePage}></Route>
         <Route path='/login' Component={Login}></Route>
         <Route path='/register' Component={Register}></Route>
            <Route path='/forgot' Component={ForgotPass}></Route>
      </Routes>
    </div>
  );
}

export default App;
