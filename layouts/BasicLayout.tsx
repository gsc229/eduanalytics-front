import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Container from '@material-ui/core/Container'


const BasicLayout = ({ children }:{ children:React.ReactNode }) => {
  return (
    <Container className='basic-layout'>
      <Header />
        {children}
      <Footer />
    </Container>
  )
}

export default BasicLayout
