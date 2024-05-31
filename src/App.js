import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Header/Navigation/Navigation";
import SectionOne from "./components/SectionOne/SectionOne";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import { useEffect, useState } from "react";
import { checkAuthState } from './firebase';


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
    <div className="App">
          <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path ='/auth' element={<Main />}/>
        <Route path='/login' element={<Login setUser={setUser}/>}/>
        <Route path='/register' element={<Register setUser={setUser}/>}/>
        <Route path='/register' element={<SectionOne />}/>
      </Routes>
    </Router>
      <Header />
      <SectionOne />
    </div>
  );
}

export default App