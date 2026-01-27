import React from 'react'
import Hero from './sections/Hero'
import EveryThink from './sections/EveryThink'
import Clarity from './sections/Clarity'
import Whychose from './sections/Whychose'
import TheJournal from './sections/TheJournal'
import About from './sections/About'
import ReadTo from './sections/ReadTo'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main>
      <Hero />
      <EveryThink />
      <Clarity />
      <Whychose />
      <TheJournal />
      <About />
      <ReadTo />
      <Footer />
    </main>
  )
}

export default Home
