import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { Faculties } from './sections/Faculties'
import { Stats } from './sections/Stats'
import { Ecosystem } from './sections/Ecosystem'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Faculties />
      <Stats />
      <Ecosystem />
      <Footer />
    </>
  )
}

export default App
