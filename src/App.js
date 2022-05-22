import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom'
import NavBar from './components/navbar/NavBar';
import Homepage from './components/homepage/Homepage';
import SaucePage from './components/saucePage/SaucePage';
import SignIn from './components/signIn/SignIn';

function App() {
  return (
    <Router>
      <div className='wrapper'>
        <div className='container-fluid'>
          <div className='row'>
            <header>
              <NavBar />
            </header>
          </div>
        <Routes>
        <Route path='/' element={ <Homepage />} />   
        <Route path='saucepage/:id' element={ <SaucePage />} />
        <Route path='signin' element={ <SignIn /> } />
        </Routes>
      </div>
    </div>
    </Router >
  );
}

export default App;
