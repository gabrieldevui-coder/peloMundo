import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/auth/Login';
import { UserStorage } from './UserContext';
import User from './components/auth/user/User';
import ProtectRouter from './components/helper/ProtectRouter';
import Photo from './components/Photo/Photo';
import UserProfile from './components/auth/user/UserProfile';
import NotFound from './components/NotFound';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/login/*" element={<Login />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/login/*" element={<Login />} />
              <Route path="/foto/:id" element={<Photo />} />
              <Route path="/perfil/:user" element={<UserProfile />} />
              <Route
                path="/conta/*"
                element={
                  <ProtectRouter>
                    <User />
                  </ProtectRouter>
                }
              />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
