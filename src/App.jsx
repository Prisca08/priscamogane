import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Experience from './components/experience/experience'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App