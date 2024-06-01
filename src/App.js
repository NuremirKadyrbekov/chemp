import React, { useState, useEffect } from 'react';
import Layout from "./components/Layout/Layout";
import "./App.css";
import { checkAuthState } from './firebase';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkAuthState(setUser);
  }, []);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
