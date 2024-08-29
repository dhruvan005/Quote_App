import { useState } from 'react'
import './App.css'
import FancyText from './components/FancyText'
import InspirationGenerator from './components/InspirationGenerator'
import Copyright from './components/Copyright'

function App() {


  return (

    <div className="w-full h-screen flex flex-col justify-center bg-slate-600 ">
      <div className="ml-10 flex flex-col">
      <FancyText title text="Get your Inspiration" />
      <InspirationGenerator >
        <Copyright year={2024} />
      </InspirationGenerator>

      </div>
    </div>


  )
}

export default App
