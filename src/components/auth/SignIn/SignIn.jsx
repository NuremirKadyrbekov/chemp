import React, { useState } from 'react';
import { auth, db } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import GoogleLogin from '../GoogleLogin/GoggleLogin';
import Css from './SignIn.module.css'
import { Button } from 'react-bootstrap';
import { Alert, Space } from 'antd';

const Register = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [alert, setAlert] = useState({ type: '', message: '', show: false });
  

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Сохраняем данные пользователя в Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        createdAt: new Date()
      });

      setUser(user);
      setAlert({ type: 'success', message: 'Успешная регистрация!', show: true });
      
    } catch (error) {
      setAlert({ type: 'error', message: "Ошибка регистрации! ", show: true });
    }
  };

  return (
    <div>
      {alert.show && <Alert message={alert.message} type={alert.type} showIcon closable afterClose={() => setAlert({ ...alert, show: false })} />}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            className={Css.SignInInputEmail}
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            className={Css.SignInInputPassword}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button type="submit"  className={Css.Btn}>Войти</Button>
      </form>
      <GoogleLogin setUser={setUser} />
    </div>
  );
};

export default Register;