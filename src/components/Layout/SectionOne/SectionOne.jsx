import React from "react";
import "./SectionOne.css";
import cart from "../../../sources/images/cart.png";
import radar from "../../../sources/images/radar.png";
import phone from "../../../sources/images/phone.png";
import phone2 from "../../../sources/images/phone2.png";

const SectionOne = () => {
  return (
    <div className="sectionone">
        <img className="sectionone__cart" src={cart} alt="" />
      <div className="container">
        <div className="sectionone__body">
          <div className="sectionone__images">
            <img src={phone2} alt="" />
            <div className="sectionone__double">
              <img src={radar} alt="" />
              <img src={phone} alt="" />
            </div>
          </div>

          <div className="sectione__desc">
            <div className="sectionone__title">
              Полностью <br /> интегрированный набор платежных продуктов
            </div>
            <p className="sectionone__text">
              Мы объединяем все, что требуется для <br /> создания веб-сайтов и
              приложений, которые <br /> принимают платежи и отправляют выплаты по
              всему
              миру. Продукты Stripe позволяют <br /> осуществлять платежи онлайн и
              лично <br />
              розничным продавцам, компаниям, <br /> занимающимся подпиской,
              программным <br />
              платформам и маркетплейсам, а также всему, <br /> что находится между
              ними.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
