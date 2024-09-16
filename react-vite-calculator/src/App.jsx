import { useState } from 'react'
import './App.css'
import Header from '../components/header'
import Keypad from '../components/keypad'

function App() {
  return (
    <div className='container'>
      <Header />
      <Keypad />
    </div>
  )
}

export default App
