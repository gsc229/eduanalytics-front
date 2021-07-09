import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Container from '@material-ui/core/Container'


const BasicLayout = ({ children }:{ children:React.ReactNode }) => {
  return (
    <div className='basic-layout'>
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export default BasicLayout
