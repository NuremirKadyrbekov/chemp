import React, { useEffect, useState } from "react";
import "./HeaderDesc.css";
import h2 from '../../../../sources/images/h_2.png'
import { checkAuthState, auth } from '../../../../firebase';
import PaymentModal from "../../../Payment/Payment";

const HeaderDesc = () => {
  const [user, setUser]= useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    checkAuthState(setUser);
  }, []);


  

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="headerdesc">
      <div className="container">
        <div className="headerdesc__body">
          <div className="headerdesc__title">
            Легкие <br /> и безопасные <br /> <span>Онлайн-платежи</span>
          </div>
          <p className="headerdesc__text">
            Миллионы компаний всех размеров используют Наш <br /> сервис онлайн
            и лично для приема платежей, отправки <br /> выплат, автоматизации
            финансовых процессов и <br /> увеличения дох одов.
          </p>
          {
            user?  <button className="headerdesc__button">Начать сейчас</button> : <button className="headerdesc__button" style={{backgroundColor:'rgb(213, 197, 207)', cursor:'no-drop'}} >Начать сейчас</button>
          }

          <img className="headerimgs__h2" src={h2} alt="" />
          {isModalOpen && <PaymentModal onClose={handleCloseModal} />}
        </div>
      </div>
    </div>
  );
};

export default HeaderDesc;
