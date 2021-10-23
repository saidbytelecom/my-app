import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer/UsersContainer';
import Xmuki from './components/Xmuki/Xmuki';

const App = () => {
  return(
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Route path={"/profile"} render={ () => <Profile />} />
      <Route path={"/users"} render={ ()   => <UsersContainer />} />
      <Route path={"/xmuki"} render={ ()   => <Xmuki />} />
    </div>
    </BrowserRouter>
  )
}

export default App;
