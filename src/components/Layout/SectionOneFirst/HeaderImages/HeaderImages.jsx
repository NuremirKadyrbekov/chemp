import React from 'react'
import bg from '../../../../sources/images/h_bg.png'
import h1 from '../../../../sources/images/h_1.png'
import phone from '../../../../sources/images/h_phone.png'
import "./HeaderImages.css"

const HeaderImages = () => {
  return (
    <div className='headerimgs'>
        <div className="headerimgs__body">
            <img className='headerimgs__h1' src={h1} alt="" />
            <img className='headerimgs__bg' src={bg} alt="" />
            <img className='headerimgs__phone' src={phone} alt="" />
        </div>
    </div>
  )
}

export default HeaderImages