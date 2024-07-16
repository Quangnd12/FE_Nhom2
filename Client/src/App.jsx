import './App.css';
import SideBar from './components/sidebar/SideBar.component';
import {
  Routes, Route
} from "react-router-dom";
import HomePage from './pages/homepage/HomePage';
import SearchPage from './pages/searchpage/SearchPage';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path='/' Component={HomePage}></Route>
      </Routes>
      <SearchPage></SearchPage>
    </div>
  );
}

export default App;
