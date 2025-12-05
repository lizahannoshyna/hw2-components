import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Greeting from "./Components/Greeting"
import Message from "./Components/Message"
import Button from "./Components/Button"

function App() {

  const handleClick = () => {
    console.log('Кнопку натиснули!');
  };

  return (
    <>
      <Greeting name="Іван" />
      <Message text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Button onClick={handleClick} />
    </>
  )
}

export default App
