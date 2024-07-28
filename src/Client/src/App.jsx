import './App.css';
import SideBar from './components/sidebar/SideBar.component';
import { Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import Header from './components/header/Header';
import SearchPage from './pages/searchpage/SearchPage';
import Artist from './pages/artist/Artist';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import ForgotPass from './pages/auth/forgotPass';
import Track from './pages/track/Track';
import Content from './pages/content/Content';
import InfoClient from './pages/info-client/Info-client';


function Client() {

  return (
    <div className="App max-h-dvh bg-black">
      <div className="flex gap-2">
        <div style={{ width: '300px' }}>
          <SideBar />
        </div>
        <div className="flex-1">
          <Header />
          <div
            className="overflow-y-auto"
            style={{ background: 'linear-gradient(to bottom, #888888, #000000 95%)', height: '620px' }}
          >
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/search" component={SearchPage} />
                <Route path="/artist" component={Artist} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/forgot" component={ForgotPass} />
                <Route path="/content" component={Content} />
                <Route path="/info" component={InfoClient} />
                <Route path="/track" component={Track} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
