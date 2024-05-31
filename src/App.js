import { useEffect, useState } from "react";
import { checkAuthState } from './firebase';
import Layout from "./components/Layout/Layout";
import "./App.css";


function App() {
  

  return (
    <div className="App">
      <Layout />

    </div>
  );
}

export default App