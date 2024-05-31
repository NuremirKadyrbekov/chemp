
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { checkAuthState } from './firebase';
import Home from './components/Home/Home';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    checkAuthState(setUser);
  }, []);

  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path ='/auth' element={<Main />}/>
        <Route path='/login' element={<Login setUser={setUser}/>}/>
        <Route path='/register' element={<Register setUser={setUser}/>}/>
      </Routes>
    </Router>
  )
}

export default App