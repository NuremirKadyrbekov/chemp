import React from "react";
import "./SectionThree.css";

const SectionThree = () => {
  return (
    <div className="sectionthree">
      <div className="container">
        <div className="sectionthree__body">``
          <div className="sectionthree__header">
            <div className="sectionthree__title">Как это работает?</div>
            <p className="sectionthree__text">
              С нашей интуитивно понятной системой вы <br /> можете легко интегрировать
              онлайн-платежи на <br /> ваш сайт всего в три простых шага.
            </p>
          </div>
          <div className="sectionthree__cards">
            <div className="sectionthree__card one">
              <div className="">1</div>
              <h3>Зарегистрируйтесь</h3>
              <p>Пройдите быструю и простую регистрацию на нашей платформе.</p>
            </div>
            <div className="sectionthree__card two">
              <div className="">2</div>
              <h3>Настройте параметры</h3>
              <p>Настройте платежные параметры в соответствии с потребностями.</p>
            </div>
            <div className="sectionthree__card three">
              <div className="">3</div>
              <h3>Начните пользоваться!</h3>
              <p>Запустите ваш сайт и начните принимать платежи от клиентов.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
