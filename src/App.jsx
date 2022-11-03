import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Portfolio from './components/portfolio/portfolio'
import Testimonial from './components/testimonial/testimonial'
import Experience from './components/experience/experience'
import Footer from './components/footer/footer'
import Services from './components/services/services'

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/*<Services />*/}
      {/*<Portfolio />*/}
      {/*<Testimonial />*/}
      <Contact />
      <Footer />
    </div>
  )
}

export default App