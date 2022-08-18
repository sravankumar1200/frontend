import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Admin from './components/pages/AdminPage/Admin';
import Detailsp from './components/pages/DetailsPage/Detailsp';
import Home from './components/pages/HomePage/Home';
import User from './components/pages/UserPage/User';
import About from './components/pages/Aboutpage/About'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Home' element={<Home />} />
        <Route path='Admin' element={<Admin />} />
        <Route path='User' exact element={<User />} />
        <Route path='/User/Detailsp' element={<Detailsp />} />
        <Route path='About' exact element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
