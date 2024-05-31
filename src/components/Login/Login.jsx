import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Css from "./Login.module.css";
import { Link} from "react-router-dom";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
//   const [createAccount, setCreateAccount] = useState(false);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      alert("Логин успешен!");
    } catch (error) {
      setError("Error");
    }
  };

  
    return (
    <div className={Css.container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className={Css.Form}>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className={Css.inputForm}
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className={Css.inputForm}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className={Css.Btn} type="submit">
          {" "}
          Login in now
        </button> 
        
      </form>
      <GoogleLogin/>
        <button className={Css.Toggle} ><Link to={'/register'}>Create a new account</Link></button>

    </div>
  );
  };

export default Login;
