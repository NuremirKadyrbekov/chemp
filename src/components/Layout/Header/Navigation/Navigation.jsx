import React, { useState, useEffect } from "react";
import "./Navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../../../auth/Login/Login";
import { Button, Modal } from "react-bootstrap";
import Register from "../../../auth/SignIn/SignIn";
import { checkAuthState, auth } from "../../../../firebase";
import AdminPanel from "../../../auth/admin/adminPanel";

const Navigation = () => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [toggle, setToggle] = useState(true);

  const handleLoginJoinClose = () => setShowLogin(false);
  const handleLoginJoinShow = () => setShowLogin(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    checkAuthState(setUser);
  }, []);

  const handleLogout = () => {
    auth.signOut();
    setUser(null);
    localStorage.removeItem("user");
  };

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="navigation">
       {user ? (
                <>
                  {user.email === 'admin@gmail.com' ? ( // Проверьте email пользователя
                  <div style={{zIndex:'2'}}>

                   <AdminPanel/>
                  </div>    
                  ) : (
                   <div>

                   </div>
                  )}
                </>
              ) : (
                <div>

                </div>
              )}
      <div className="container">
        <div className="navigation__body">
          <h1 className="navigation__logo">Logo</h1>
          
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={menuOpen ? "open" : ""}>
            <ul className="nav__list">
              <li className="nav__item">Главная</li>
              <li className="nav__item">О нас</li>
              <li className="nav__item">Контакты</li>
              {user ? (
                <>
                  {user.email === 'admin@gmail.com' ? ( // Проверьте email пользователя
                  <div style={{zIndex:'2'}}>
                     <button
                      className="nav__item nav__button"
                      onClick={handleLogout}
                    >
                      Выйти
                    </button>
                  </div>    
                  ) : (
                    <button
                      className="nav__item nav__button"
                      onClick={handleLogout}
                    >
                      Выйти
                    </button>
                  )}
                </>
              ) : (
                <button
                  className="nav__item nav__button"
                  onClick={handleLoginJoinShow}
                >
                  Войти
                </button>
              )}
              <Modal show={showLogin} onHide={handleLoginJoinClose} >
                <Modal.Header closeButton>
                  <Modal.Title>
                    {toggle ? "Войдите сейчас" : "Зарегистрируйтесь сейчас"}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="ModalAuth">
                  {toggle ? (
                    <Login setUser={setUser} />
                  ) : (
                    <Register setUser={setUser} />
                  )}
                </Modal.Body>
                <Modal.Footer>
                  
                  <button
                    onClick={() => setToggle(!toggle)}
                   className='toggleSign'>
                    {toggle ? "Создать аккаунт" : "Войти в аккаунт"}
                  </button>
                </Modal.Footer>
              </Modal>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
