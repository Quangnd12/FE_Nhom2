import "./App.css";
// import SideBar from './components/sidebar/SideBar.component';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import ForgotPass from "./pages/auth/forgotPass";
import SearchPage from "./pages/searchpage/SearchPage";

function App() {
  return (
    <div className="App max-h-dvh bg-black">
      <div className="flex gap-2">
        <div style={{ width: "300px" }}>
          <SideBar />
        </div>
        <div className="flex-1">
          <Header />
          <div
            className="overflow-y-auto"
            style={{ background: "linear-gradient(to bottom, #888888, #000000 95%)", height: "620px" }}
          >
            <Routes>
              <Route
                path="/"
                Component={HomePage}
              ></Route>
              <Route
                path="/"
                Component={HomePage}
              ></Route>
              <Route
                path="/login"
                Component={Login}
              ></Route>
              <Route
                path="/register"
                Component={Register}
              ></Route>
              <Route
                path="/forgot"
                Component={ForgotPass}
              ></Route>
            </Routes>
            <SearchPage></SearchPage>
          </div>
        </div>
      </div>
    </div>
    // <div className="App">
    //   {/* <SideBar /> */}
    //   <Routes>
    //     <Route path='/' Component={HomePage}></Route>
    //      <Route path='/login' Component={Login}></Route>
    //      <Route path='/register' Component={Register}></Route>
    //         <Route path='/forgot' Component={ForgotPass}></Route>
    //   </Routes>
    //   <SearchPage></SearchPage>
    // </div>
  );
}

export default App;
