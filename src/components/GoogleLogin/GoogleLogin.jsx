import React from "react";
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import Google from "../../sources/images/Google.webp";
import Css from "./Google.module.css";

const GoogleLogin = ({ setUser }) => {
  const handleGoogleLogin = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      setUser(userCredential.user);
      alert("Вход через Google успешен!");
    } catch (error) {
      alert(`Ошибка входа через Google: ${error.message}`);
    }
  };

  return (
    <div className={Css.Container} onClick={handleGoogleLogin}>
      <h3>Login with Google</h3>
      <div  className={Css.GoogleIcon}>
        <img src={Google} alt="" />
      </div>
    </div>
  );
};

export default GoogleLogin;
