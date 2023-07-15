
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import PageNotFound from './components/PageNotFound';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';
const App = () => {
  const[isLoggedIn,setIsLoggedIn] =useState(false);
  return (
    <div className="w-screen h-screen flex flex-col bg-slate-950">
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <Routes>
      <Route path="/" element={<Home setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/dashboard" element={
      <PrivateRoute isLoggedIn={isLoggedIn}>
  <Dashboard />
      </PrivateRoute>
    }/>
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
    </div>
  )
}

export default App
