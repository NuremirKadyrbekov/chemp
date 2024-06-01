import React from "react";
import "./SectionTwo.css";
import CodeSnippet from "./CodeSnippet";

const SectionTwo = () => {
  return (
    <div className="sectiontwo">
      <div className="container">
        <div className="sectiontwo__body">
          <div className="sectiontwo__desc">
            <div className="sectiontwo__title">
              Самые мощные и <br /> простые в <br /> использовании API <br /> в
              мире
            </div>
            <div className="sectiontwo__subdesc">
              <div className="sectiontwo__subtitle">
                Инструменты для каждого стека
              </div>
              <p className="sectiontwo__text">
                Мы предлагаем клиентские и серверные <br /> библиотеки на всех
                языках - от React и PHP <br /> до .NET и iOS.
              </p>
            </div>
            <div className="sectiontwo__subdesc">
              <div className="sectiontwo__subtitle">Готовые интеграции</div>
              <p className="sectiontwo__text">
                Используйте интеграцию с такими <br /> системами, как Shopify,
                WooCommerce, <br /> NetSuite и другими.
              </p>
            </div>
          </div>
          <div className="sectiontwo__image">
            <CodeSnippet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
