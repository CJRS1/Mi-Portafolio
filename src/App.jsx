import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'

const App = () => {
    return (
        <>
        <Nav />
        <Header />
        <About />
        <Experience />
        <Contact/>
        <Footer/>
        </>
    )
}

export default App