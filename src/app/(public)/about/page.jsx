import React from 'react'
import AboutHero from './sections/AboutHero'
import AboutOur from './sections/AboutOur'
import AboutProfile from './sections/AboutProfile'
import AboutTeam from './sections/AboutTeam'
import AboutRead from './sections/AboutRead'
import Footer from '@/app/components/Footer'

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutOur />
      <AboutProfile />
      <AboutTeam />
      <AboutRead />
      <Footer />
    </div>
  )
}

export default About