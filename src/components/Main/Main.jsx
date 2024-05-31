import React, { useEffect, useState } from 'react';
import { auth, checkAuthState } from '../../firebase';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import Login from '../Login/Login';
import Register from '../Register/Register';


function Main() {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      checkAuthState(setUser);
    }, []);
  
    const handleLogout = () => {
      auth.signOut();
      setUser(null);
      localStorage.removeItem('user');
    };
  
    return (
      <div className="App">
        {user ? (
          <div>
            <p>Добро пожаловать, {user.email}</p>
            <button onClick={handleLogout}>Выйти</button>
          </div>
        ) : (
          <>
            <Login  />
          </>
        )}
      </div>
    );
}

export default Main