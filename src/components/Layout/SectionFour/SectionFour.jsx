import React from "react";
import "./SectionFour.css";
import video from "../../../sources/images/VIdeo.png";
import ava from "../../../sources/images/ava.png";
import ava2 from "../../../sources/images/ava2.png";
import ava3 from "../../../sources/images/ava3.png";
import { FaArrowRight } from "react-icons/fa";

const SectionFour = () => {
  return (
    <div className="sectionfour">
      <div className="container">
        <div className="sectionfour__body">
          <div className="sectionfour__video">
            <img src={video} alt="" />
          </div>

          <div className="sectionfour__title">
            +1,749 команд поделились своим опытом <br /> использования нашего
            сервиса!
          </div>
          <div className="sectionfour__comments">
            <div className="sectionfour__comment">
              <div className="comment__avatar">
                <img src={ava} alt="" />
              </div>
              <div className="comments">
                <p>
                  “Невероятно! Не могу поверить, что настройка нашего
                  интернет-магазина заняла всего несколько минут. Все было
                  просто и понятно.”
                </p>
                <span>Алексей Смирнов</span>
              </div>
            </div>
            <div className="sectionfour__comment">
              <div className="comment__avatar">
                <img src={ava2} alt="" />
              </div>
              <div className="comments">
                <p>
                  “Это лучший сервис для приема онлайн-платежей. Подходит как
                  для начинающих, так и для опытных пользователей, стремящихся к
                  успеху.”
                </p>
                <span>Михаил Иванов</span>
              </div>
            </div>
            <div className="sectionfour__comment">
              <div className="comment__avatar">
                <img src={ava3} alt="" />
              </div>
              <div className="comments">
                <p>
                  “Обязательный инструмент для любого бизнеса, который хочет
                  принимать платежи онлайн быстро и безопасно.”
                </p>
                <span>Ирина Петрова</span>
              </div>
            </div>
          </div>
          <span className="sectionfour__all">
            Все отзывы <FaArrowRight /> 
          </span>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
