import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './components/header/Header.tsx'
import Homepage from './pages/homepage/Homepage.tsx'
import SaucePage from './pages/saucePage/SaucePage.tsx'
import SignIn from './pages/signIn/SignIn'
import NewSauce from './pages/newSauce/NewSauce.tsx'
import SignUp from './pages/signUp/SignUp'
import Footer from './components/footer/Footer.tsx'
import Access from './pages/access/Access.tsx'
import React, { useState } from 'react'
import { UserContext } from './store/Context.tsx'

function App() {
  const [user2, user2Set] = useState<UserContext>({
    userId: sessionStorage.getItem('userId'),
    token: sessionStorage.getItem('token'),
    email: sessionStorage.getItem('email'),
  })
  return (
    <Router>
      <div>
        <div>
          <UserContext.Provider value={{ user2, user2Set }}>
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
          </UserContext.Provider>
        </div>
      </div>
    </Router>
  )
}

export default App
