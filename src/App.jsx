
import Header from './Components/header/Header'
import './App.css'
import Course from './Components/Course/Course'
import Select from './Components/Selects/Select'
import { useState } from 'react'

function App() {

  const [courseName, setCourseName] = useState([])

  const handleCourseName = selector => {
    console.log(selector)
  }

  return (
    <>

      <Header></Header>
      <div className='md:flex  max-w-7xl mx-auto   gap-10 mt-20'>
        <Select handleCourseName={handleCourseName} ></Select>
        <Course></Course>
      </div>





    </>
  )
}

export default App
