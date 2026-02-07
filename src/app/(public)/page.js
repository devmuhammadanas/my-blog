'use client'
import React from 'react'
import Hero from './sections/Hero'
import EveryThink from './sections/EveryThink'
import Clarity from './sections/Clarity'
import Whychose from './sections/Whychose'
import TheJournal from './sections/TheJournal'
import About from './sections/About'
import ReadTo from './sections/ReadTo'
import Footer from '../components/Footer'
import { useAuthContext } from '../../../useContext/AuthContext'

const Home = () => {
  const {loadingState} = useAuthContext()
  return (
    <main>

      {
        loadingState ? <div>Loading...</div>
        :
        <div>
          <Hero />
          <EveryThink />
          <Clarity />
          <Whychose />
          <TheJournal />
          <About />
          <ReadTo />
          <Footer />

        </div>
      }

    </main>
  )
}

export default Home
