import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom'
import Header from './components/header/Header';
import Homepage from './components/homepage/Homepage';
import SaucePage from './components/saucePage/SaucePage';
import SignIn from './components/signIn/SignIn';
import NewSauce from './components/newSauce/NewSauce';
import SignUp from './components/signUp/SignUp';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div>
        <div>
          <div>
            <header>
              <Header />
            </header>
          </div>
        <Routes>
        <Route path='/' element={ <Homepage />} />  
        <Route path='saucepage/:id' element={ <SaucePage />} />
        {!sessionStorage.getItem('token')? <Route path='saucepage/:id/updatesauce/:id' element={ <SignIn /> } />
        : <Route path='saucepage/:id/updatesauce/:id' element={ <NewSauce />} />}
        <Route path=':signin' element={ <SignIn /> } />
        <Route path='signup' element={ <SignUp /> } />
        {!sessionStorage.getItem('token')? <Route path='newsauce' element={<SignIn /> }/> :<Route path='newsauce' element={<NewSauce />}/>}
        </Routes>
        <footer>
        <Footer />
      </footer>
      </div>
    </div>
    </Router >
  );
}

export default App;
