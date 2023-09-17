
import Header from './Components/header/Header'
import './App.css'
import Course from './Components/Course/Course'
import Select from './Components/Selects/Select'
import { useState } from 'react'

function App() {

  const [courseName, setCourseName] = useState([])


  const handleCourseName = selector => {
    const newSelect = [...courseName, selector]
    setCourseName(newSelect)
  }




  return (
    <>

      <Header></Header>
      <div className='md:flex  max-w-7xl mx-auto   gap-10 mt-20'>
        <Select handleCourseName={handleCourseName}
        ></Select>
        <Course courseName={courseName}></Course>
      </div>





    </>
  )
}

export default App
