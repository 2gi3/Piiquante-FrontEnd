import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './components/header/Header'
import Homepage from './pages/homepage/Homepage'
import SaucePage from './pages/saucePage/SaucePage'
import SignIn from './pages/signIn/SignIn'
import NewSauce from './pages/newSauce/NewSauce'
import SignUp from './pages/signUp/SignUp'
import Footer from './components/footer/Footer'
import Access from './pages/access/Access'

function App() {
  return (
    <Router>
      <div>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="access" element={<Access />} />
            <Route path="saucepage/:id" element={<SaucePage />} />
            {!sessionStorage.getItem('token') ? (
              <Route
                path="saucepage/:id/updatesauce/:id"
                element={<Access />}
              />
            ) : (
              <Route
                path="saucepage/:id/updatesauce/:id"
                element={<NewSauce />}
              />
            )}
            <Route path=":signin" element={<Access />} />
            <Route path="signup" element={<Access />} />
            {!sessionStorage.getItem('token') ? (
              <Route path="newsauce" element={<Access />} />
            ) : (
              <Route path="newsauce" element={<NewSauce />} />
            )}
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
