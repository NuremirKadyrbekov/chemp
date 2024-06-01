import React, { useState } from "react";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button } from "react-bootstrap";
import GoogleLogin from "../GoogleLogin/GoggleLogin";
import Css from './Login.module.css'
import { Alert, Space } from 'antd';


const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [alert, setAlert] = useState({ type: '', message: '', show: false });
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      setAlert({ type: 'success', message: 'Успешно вошли!', show: true });

    } catch (error) {
      setAlert({ type: 'error', message: "Ошибка входа!", show: true });
      
    }
  };

  

  
    return (
    <div >
      {alert.show && <Alert message={alert.message} type={alert.type} showIcon closable afterClose={() => setAlert({ ...alert, show: false })} />}

      <form onSubmit={handleSubmit} >
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className={Css.LoginInInputEmail}
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className={Css.LoginInInputPassword}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button  type="submit" className={Css.Btn}>
          {" "}
          Login in now
        </Button> 
        
      </form>
      <GoogleLogin setUser={setUser}    />
        {/* <button  ><a to={'/register'}>Create a new account</a></button> */}

    </div>
  );
  };

export default Login;
