import React, { useState } from "react";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button } from "react-bootstrap";

// import { Link} from "react-router-dom";
import GoogleLogin from "../GoogleLogin/GoggleLogin";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  let messageState='efg';
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      alert('Регистрация успешно пройдено')
    } catch (error) {
      setError("Error");
    }
  };

  

  
    return (
    <div >
      <form onSubmit={handleSubmit} >
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
           
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button  type="submit">
          {" "}
          Login in now
        </Button> 
        <h3>{messageState}</h3>
        
      </form>
      <GoogleLogin setUser={setUser}    />
        {/* <button  ><a to={'/register'}>Create a new account</a></button> */}

    </div>
  );
  };

export default Login;
