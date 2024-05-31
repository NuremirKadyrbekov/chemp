import React from 'react'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className='navigation'>
        <div className="container">
            <div className="navigation__body">
                <h1 className='navigation__logo'>Ы.М.У</h1>
                <nav className='navigation__nav'>
                    <ul className="nav__list">
                        <li className="nav__item">Главная</li>
                        <li className="nav__item">О нас</li>
                        <li className="nav__item">Контакты</li>
                        <button className='nav__item nav__button'>Войти</button>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navigation