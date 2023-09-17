
import Header from './Components/header/Header'
import './App.css'
import Course from './Components/Course/Course'
import Select from './Components/Selects/Select'
import { useState } from 'react'

function App() {

  const [courseName, setCourseName] = useState([])
  const [credit, setCredit] = useState(0)




  const handleCourseName = selector => {

    const isExist = courseName.find((allId) => allId.id == selector.id);

    let count = selector.allId;

    if (isExist) {
      return alert("already booking")
    }

    else {

      courseName.forEach((allId) => {
        count += allId.credit;
      });

      const totalCredit = 20 - count

      setCredit(totalCredit)

      setCourseName([...courseName, selector])
    }


  }

  return (
    <>

      <Header></Header>
      <div className='md:flex  max-w-7xl mx-auto   gap-10 mt-20'>
        <Select handleCourseName={handleCourseName}
        ></Select>
        <Course courseName={courseName} credit={credit} ></Course>
      </div>





    </>
  )
}

export default App
