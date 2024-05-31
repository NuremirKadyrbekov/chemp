import React from "react";
import { auth, googleProvider } from "../../../firebase";
import { signInWithPopup } from "firebase/auth";
import Google from "../../../sources/images/Google.webp";

const GoogleLogin = ({ setUser }) => {
  const handleGoogleLogin = async () => {

    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      setUser(userCredential.user);
      alert('успешно')
    } catch (error) {
      console.log(error)
    }
  };

   
   
  return (
    <div onClick={handleGoogleLogin}>
      <h3>Login with Google</h3>
      <div >
        <img src={Google} alt="" style={{width:'40px'}} />
      </div>
    </div>
  );
};

export default GoogleLogin;
