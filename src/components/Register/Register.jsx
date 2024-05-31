import React, { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Css from './Register.module.css'
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import { Link } from 'react-router-dom';


const Register = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      alert("Регистрация прошла успешно!");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={Css.container}>
    <h1>Sign In</h1>
  <form onSubmit={handleSubmit} className={Css.Form}>
    <div >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        className={Css.inputForm}
      />
    </div>
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password' 
        className={Css.inputForm}
      />
    </div>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    <button type="submit" className={Css.Btn}>Sign in now</button>
  </form>
  <GoogleLogin setUser={setUser} />

  <button className={Css.Toggle} ><Link to={'/register'}>Create a new account</Link></button>

</div>
  );
};

export default Register;



// import React, { useState } from 'react';



// import { auth } from '../../firebase';
// import { createUserWithEmailAndPassword } from 'firebase/auth';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [signIn , setSignIn] = useState(false);



//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       alert("Регистрация прошла успешно!");
//       setSignIn(true)
//     } catch (error) {
//       setError(error.message);
//       setSignIn(false)
//     }
//   };

//   return (
//     <div>
//       <h2>Регистрация</h2>
//       { signIn? 
//       <h1>успешно</h1>:
//       <h1>не успешно</h1>

//       } 
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Пароль:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <button type="submit">Зарегистрироваться</button>
//       </form>
      
//     </div>
//   );
// };

// export default Register;
