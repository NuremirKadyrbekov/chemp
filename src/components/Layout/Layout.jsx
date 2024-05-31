import React from 'react'
import Header from './Header/Header'
import SectionOne from './SectionOne/SectionOne'
import SectionTwo from './SectionTwo/SectionTwo'
import SectionThree from './SectionThree/SectionThree'
import SectionFour from './SectionFour/SectionFour'
import Footer from './Footer/Footer'

const Layout = () => {
  return (
    <div>
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <Footer />
    </div>
  )
}

export default Layout