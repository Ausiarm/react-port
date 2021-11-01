import React from 'react'
import './App.css'
import NavigationBar from './components/navbar/NavigationBar'
import ParticleAnimation from 'react-particle-animation'
import Header from './components/header/Header';
import AboutMe from './components/aboutme/AboutMe';
import Technologies from './components/technologies/Technologies';
import Portfolio from './components/portfolio/Portfolio';
import ContactMe from './components/contactme/ContactMe';



const App = () => {
  return (
    <div className="whole_app">
        <NavigationBar/>
        <Header/>
        <ParticleAnimation
          style={{height: '96vh'}}
          background={{ r: 214, g: 235, b: 255, a: 1 }}
          numParticles= '600'
          particleSpeed= '0.69'
          particleRadius= '1.5'
          color= {{ r: 4, g: 7, b: 32, a: 255 }}
        />
        <AboutMe/>
        <Technologies/>
        <Portfolio/>
        <ContactMe/>
    </div>
  )
}

export default App
