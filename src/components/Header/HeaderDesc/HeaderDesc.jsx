import React from "react";
import "./HeaderDesc.css";
import h2 from '../../../sources/images/h_2.png'

const HeaderDesc = () => {
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
            финансовых процессов и <br /> увеличения доходов.
          </p>
          <button className="headerdesc__button">Начать сейчас</button>

          <img className='headerimgs__h2' src={h2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderDesc;
